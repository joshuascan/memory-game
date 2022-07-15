import { useState } from "react";

const PlayerSelection = ({
  setNumberOfPlayers,
}: {
  setNumberOfPlayers: (arg0: number) => void;
}) => {
  const [playerCount, setPlayerCount] = useState<number>(2);

  const decrement = () => {
    if (playerCount > 2) {
      setPlayerCount(playerCount - 1);
    }
  };

  const increment = () => {
    if (playerCount < 4) {
      setPlayerCount(playerCount + 1);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <button
          className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold disabled:bg-gray-100"
          disabled={playerCount === 2}
          onClick={decrement}
        >
          -
        </button>
        <p className="mx-10 text-4xl">{playerCount}</p>
        <button
          className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold disabled:bg-gray-100"
          disabled={playerCount === 4}
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className="mt-8 py-4 px-8 text-2xl bg-blue-500 rounded-lg"
        onClick={() => setNumberOfPlayers(playerCount)}
      >
        Submit
      </button>
    </>
  );
};

export default PlayerSelection;
