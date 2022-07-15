import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import PlayerSelection from "../components/PlayerSelection";
import Board from "../components/Board";

const Home: NextPage = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);

  return (
    <>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Memory Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center flex-col">
        <h1 className="text-5xl my-8">Memory Game</h1>
        <PlayerSelection
          numberOfPlayers={numberOfPlayers}
          setNumberOfPlayers={setNumberOfPlayers}
        />
        <Board />
      </div>
    </>
  );
};

export default Home;
