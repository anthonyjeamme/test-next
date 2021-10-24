import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="Home">
      <div>
        Hello
        <Link href="/test">TEST</Link>
      </div>
    </div>
  );
};
export default Home;
