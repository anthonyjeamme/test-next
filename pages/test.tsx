import React from "react";
import Head from "next/head";
import Link from "next/link";

const Test = ({ message }) => {
  return (
    <div className="test">
      <Head>
        <meta property="og:title" content={message} />
      </Head>
      Test {message}
      <div>
        <Link href="/">Home</Link>
      </div>
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
