import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import PlayerSelection from "../components/PlayerSelection";
import Board from "../components/Board";
import { PlayerInfo } from "../interfaces";

const Home: NextPage = () => {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);

  return (
    <>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Memory Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center flex-col mb-12">
        <h1 className="text-5xl my-8">Memory Game</h1>
        {players.length === 0 ? (
          <PlayerSelection setPlayers={setPlayers} />
        ) : (
          <Board players={players} setPlayers={setPlayers} />
        )}
      </div>
    </>
  );
};

export default Home;
