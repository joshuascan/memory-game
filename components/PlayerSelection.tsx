const PlayerSelection = ({
  numberOfPlayers,
  setNumberOfPlayers,
}: {
  numberOfPlayers: number;
  setNumberOfPlayers: (arg0: number) => void;
}) => {
  const decrement = () => {
    if (numberOfPlayers > 2) {
      setNumberOfPlayers(numberOfPlayers - 1);
    }
  };

  const increment = () => {
    if (numberOfPlayers < 4) {
      setNumberOfPlayers(numberOfPlayers + 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold"
        disabled={numberOfPlayers === 2}
        onClick={decrement}
      >
        -
      </button>
      <p className="mx-10 text-4xl">{numberOfPlayers}</p>
      <button
        className="h-16 w-16 rounded-full bg-gray-200 text-2xl font-bold"
        disabled={numberOfPlayers === 4}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default PlayerSelection;
