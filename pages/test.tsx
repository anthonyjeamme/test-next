import React from "react";
import Head from "next/head";

const Test = ({ message }) => {
  return (
    <div className="test">
      <Head>
        <meta property="og:title" content={message} />
      </Head>
      Test {message}
    </div>
  );
};
export default Test;

export async function getServerSideProps(context) {
  const message = "bonjour";

  return {
    props: {
      message,
    },
  };
}
