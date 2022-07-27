import { useState } from "react";
import { PlayerSelectionProps, PlayerInfo } from "../interfaces";

const PlayerSelection = ({ setPlayers }: PlayerSelectionProps) => {
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [currentWindow, setCurrentWindow] = useState<
    "Player Count" | "Player Names"
  >("Player Count");

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedArray = [...playerNames];
    updatedArray[Number(e.target.name)] = e.target.value;
    setPlayerNames(updatedArray);
  };

  const handleNext = () => {
    setPlayerNames(Array(playerCount).fill(""));
    setCurrentWindow("Player Names");
  };

  const handleBack = () => {
    setCurrentWindow("Player Count");
  };

  const handleSubmit = () => {
    const playerDetails: PlayerInfo[] = playerNames.map((name) => {
      return { name: name, score: 0 };
    });
    setPlayers(playerDetails);
  };

  return (
    <>
      {currentWindow === "Player Count" && (
        <>
          <h2 className="text-3xl italic mt-8">Select Number of Players</h2>
          <div className="flex justify-around items-center mt-8 w-80">
            <button
              className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold disabled:bg-gray-100 active:bg-gray-300"
              disabled={playerCount === 2}
              onClick={decrement}
            >
              -
            </button>
            <p className=" text-4xl">{playerCount}</p>
            <button
              className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold disabled:bg-gray-100 active:bg-gray-300"
              disabled={playerCount === 4}
              onClick={increment}
            >
              +
            </button>
          </div>
          <button
            className="mt-10 py-2 px-6 text-2xl text-white bg-blue-500 active:bg-blue-600 rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
      {currentWindow === "Player Names" && (
        <>
          <h2 className="text-3xl italic mt-8">Enter Player Names</h2>
          <div className="flex flex-col items-center mt-8 mb-4">
            {playerNames.map((player, index) => (
              <div
                className="flex justify-between items-center mb-2"
                key={index}
              >
                <label className="text-xl pr-2">Player {index + 1}:</label>
                <input
                  className="border-gray-200 border-2 p-1 outline-none rounded-md"
                  type="text"
                  name={`${index}`}
                  value={player}
                  onChange={handleNameChange}
                />
              </div>
            ))}
          </div>
          <div className="flex">
            <button
              className="mt-6 mx-4 py-2 px-6 text-2xl text-white bg-blue-500 active:bg-blue-600 rounded-lg"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="mt-6 mx-4 py-2 px-6 text-2xl text-white bg-orange-400 active:bg-orange-500 rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PlayerSelection;
