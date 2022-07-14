import type { NextPage } from "next";
import Head from "next/head";
import Board from "../components/Board";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Memory Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center flex-col">
        <h1 className="text-5xl my-8">Memory Game</h1>
        <Board />
      </div>
    </>
  );
};

export default Home;
