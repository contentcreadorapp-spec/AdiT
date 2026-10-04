"use client";

import { useEffect, useState } from "react";

function useLosAngelesTime() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function StatusBar() {
  const time = useLosAngelesTime();
  return (
    <div className="bg-ink font-mono text-[11px] tracking-[0.14em] text-paper uppercase">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <span className="truncate">ADiT &mdash; Los Angeles, CA</span>
        <span className="hidden shrink-0 sm:inline" aria-label="Current time in Los Angeles">
          {time} PT
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 animate-blink rounded-full bg-signal"
          />
          All systems nominal
        </span>
      </div>
    </div>
  );
}
