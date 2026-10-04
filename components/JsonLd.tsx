type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

/** Renders a JSON-LD structured-data script tag. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
