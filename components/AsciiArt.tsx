"use client";

import { useEffect, useRef, useState } from "react";

type RenderMode = "characters" | "dots" | "blocks" | "lines";

const MODES: { id: RenderMode; label: string }[] = [
  { id: "characters", label: "Characters" },
  { id: "dots", label: "Dots" },
  { id: "blocks", label: "Blocks" },
  { id: "lines", label: "Lines" },
];

/** dark -> light */
const CHAR_RAMP =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,. ".split("");

const COLS = 110;
const CELL = 10;

/**
 * ASCII-art renderer (inspired by the "Robot + Human" effect).
 * Pipeline: sample source photo per cell -> draw glyph/primitive sized and
 * shaded by luminance -> blurred-photo backdrop, vignette + film grain,
 * shimmer animation. Pauses offscreen and honors reduced-motion.
 */
export default function AsciiArt({ src, alt }: { src: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<RenderMode>("characters");
  const [failed, setFailed] = useState(false);
  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let onscreen = true;
    let dead = false;

    const io = new IntersectionObserver(([entry]) => {
      onscreen = entry.isIntersecting;
    });
    io.observe(wrap);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (dead) return;
      const aspect = img.naturalHeight / img.naturalWidth;
      const cols = COLS;
      const rows = Math.max(24, Math.round(cols * aspect));
      canvas.width = cols * CELL;
      canvas.height = rows * CELL;

      // 1. sample: draw the photo tiny; each pixel = one cell's average color
      const sampler = document.createElement("canvas");
      sampler.width = cols;
      sampler.height = rows;
      const sctx = sampler.getContext("2d", { willReadFrequently: true });
      if (!sctx) return;
      sctx.drawImage(img, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;
      const lum = new Float32Array(cols * rows);
      for (let i = 0; i < cols * rows; i++) {
        lum[i] =
          (0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2]) / 255;
      }

      // 2. backdrop: blurred cover copy at 90% over near-black
      const bg = document.createElement("canvas");
      bg.width = canvas.width;
      bg.height = canvas.height;
      const bctx = bg.getContext("2d");
      if (bctx) {
        bctx.fillStyle = "#0c0c0b";
        bctx.fillRect(0, 0, bg.width, bg.height);
        const scale = Math.max(bg.width / img.naturalWidth, bg.height / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        bctx.filter = "blur(2px)";
        bctx.globalAlpha = 0.9;
        bctx.drawImage(img, (bg.width - dw) / 2, (bg.height - dh) / 2, dw, dh);
        // darken so light glyphs pop (light-on-dark ASCII)
        bctx.globalAlpha = 1;
        bctx.filter = "none";
        bctx.fillStyle = "rgba(4,4,5,0.62)";
        bctx.fillRect(0, 0, bg.width, bg.height);
      }

      // 3. vignette (static, intensity 58)
      const vig = document.createElement("canvas");
      vig.width = canvas.width;
      vig.height = canvas.height;
      const vctx = vig.getContext("2d");
      if (vctx) {
        const g = vctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width, canvas.height) * 0.35,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height) * 0.75
        );
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(1, "rgba(0,0,0,0.58)");
        vctx.fillStyle = g;
        vctx.fillRect(0, 0, vig.width, vig.height);
      }

      // 4. film grain tiles (intensity 32)
      const grains: HTMLCanvasElement[] = [];
      for (let t = 0; t < 3; t++) {
        const n = document.createElement("canvas");
        n.width = 160;
        n.height = 160;
        const nctx = n.getContext("2d");
        if (nctx) {
          const idata = nctx.createImageData(160, 160);
          for (let i = 0; i < idata.data.length; i += 4) {
            const v = (Math.random() * 255) | 0;
            idata.data[i] = v;
            idata.data[i + 1] = v;
            idata.data[i + 2] = v;
            idata.data[i + 3] = 255;
          }
          nctx.putImageData(idata, 0, 0);
        }
        grains.push(n);
      }

      ctx.font = `bold ${CELL}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const render = (time: number, frame: number) => {
        const m = modeRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(bg, 0, 0);

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const i = y * cols + x;
            const l = lum[i];
            // shimmer: gentle per-cell alpha wave (animIntensity 60)
            const shimmer = reduced
              ? 1
              : 1 - 0.21 * (0.5 + 0.5 * Math.sin(time * 2.4 + (x * 0.6 + y * 1.1) * 0.5));
            // light-on-dark: bright cells get dense, bright glyphs
            const v = Math.round(70 + l * 185);
            const cx = x * CELL + CELL / 2;
            const cy = y * CELL + CELL / 2;
            ctx.globalAlpha = shimmer;
            ctx.fillStyle = `rgb(${v},${v},${v})`;
            ctx.strokeStyle = `rgb(${v},${v},${v})`;

            if (m === "characters") {
              const gi = Math.min(CHAR_RAMP.length - 1, Math.floor((1 - l) * CHAR_RAMP.length));
              ctx.fillText(CHAR_RAMP[gi], cx, cy);
            } else if (m === "dots") {
              ctx.beginPath();
              ctx.arc(cx, cy, Math.max(0.4, l * CELL * 0.5), 0, Math.PI * 2);
              ctx.fill();
            } else if (m === "blocks") {
              ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
            } else {
              // lines
              const len = l * CELL;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(cx - len / 2, cy);
              ctx.lineTo(cx + len / 2, cy);
              ctx.stroke();
            }
          }
        }

        // post: vignette + animated grain
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(vig, 0, 0);
        if (!reduced && grains.length > 0) {
          ctx.save();
          ctx.globalAlpha = 0.16;
          ctx.globalCompositeOperation = "overlay";
          const pat = ctx.createPattern(grains[frame % grains.length], "repeat");
          if (pat) {
            pat.setTransform(
              new DOMMatrix().translate(Math.random() * 160, Math.random() * 160)
            );
            ctx.fillStyle = pat;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          ctx.restore();
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      };

      if (reduced) {
        render(0, 0);
        return;
      }

      let last = 0;
      let frame = 0;
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        if (!onscreen || now - last < 33) return; // ~30fps cap
        last = now;
        frame++;
        render(now * 0.001, frame);
      };
      raf = requestAnimationFrame(loop);
    };

    img.onerror = () => {
      if (!dead) setFailed(true);
    };

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [src]);

  if (failed) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl bg-ink font-mono text-xs tracking-[0.18em] text-paper/60 uppercase">
        Art failed to load
      </div>
    );
  }

  return (
    <div ref={wrapRef}>
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink">
        <canvas ref={canvasRef} role="img" aria-label={alt} className="h-auto w-full" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Render mode">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
            className={`min-h-11 rounded-full border px-4 font-mono text-xs tracking-[0.16em] uppercase transition-colors ${
              mode === m.id
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-muted hover:border-ink/50 hover:text-ink"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
