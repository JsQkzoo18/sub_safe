import React from "react";
import Head from "next/head";

export default function SEO_C({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

SEO_C.defaultProps = {
  title: "Suba Safe",
  description: "Publica tu artículo para obtener el mejor monto posible👌",
};
