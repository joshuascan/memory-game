import { useState } from "react";

const PlayerSelection = ({
  setPlayers,
}: {
  setPlayers: (arg0: string[]) => void;
}) => {
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [playerNames, setPlayerNames] = useState<any[]>([]);
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
    console.log(playerNames);
  };

  const handleNext = () => {
    setPlayerNames(Array(playerCount).fill(""));
    setCurrentWindow("Player Names");
  };

  const handleBack = () => {
    setCurrentWindow("Player Count");
  };

  const handleSubmit = () => {
    setPlayers(playerNames);
  };

  return (
    <>
      {currentWindow === "Player Count" && (
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
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
      {currentWindow === "Player Names" && (
        <>
          <div className="flex flex-col items-center">
            {playerNames.map((player, index) => (
              <div key={index}>
                <label>Player {index + 1}:</label>
                <input
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
              className="mt-8 mx-4 py-4 px-8 text-2xl bg-blue-500 rounded-lg"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="mt-8 mx-4 py-4 px-8 text-2xl bg-blue-500 rounded-lg"
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
