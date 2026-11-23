import Head from "next/head";

// Renders a JSON-LD structured data block in <head>
const JsonLd = ({ data, id = "page-schema" }) => (
  <Head>
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  </Head>
);

export default JsonLd;
