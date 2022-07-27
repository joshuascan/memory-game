import { useEffect, useState } from "react";
import { GAME_OBJECTS } from "../constants/data";
import { BoardProps, GameObject, PlayerInfo } from "../interfaces";
import Circle from "./Circle";

const shuffle = (array: GameObject[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Board = ({ players, setPlayers }: BoardProps) => {
  const [circles, setCircles] = useState<GameObject[]>();
  const [currentPlayer, setCurrentPlayer] = useState(players[0].name);
  const [totalScore, setTotalScore] = useState(0);
  const [turn, setTurn] = useState(1);
  const [selections, setSelections] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null | undefined>(null);

  const showCircle = (id: number) => {
    const newData = circles?.map((circle) => {
      if (id === circle.id) {
        setSelections([...selections, circle.name]);
        return { ...circle, hidden: false };
      }
      return circle;
    });
    setCircles(newData);
  };

  const takeTurn = (id: number) => {
    if (turn <= 2) {
      showCircle(id);
      setTurn((prevState) => prevState + 1);
    }
  };

  const resetGame = () => {
    setCircles(shuffle(GAME_OBJECTS));
    setCurrentPlayer(players[0].name);
    const resetPlayers: PlayerInfo[] = players.map((player) => {
      return { name: player.name, score: 0 };
    });
    setPlayers(resetPlayers);
    setWinner(null);
    setTotalScore(0);
  };

  useEffect(() => {
    setCircles(shuffle(GAME_OBJECTS));
  }, []);

  useEffect(() => {
    if (selections.length === 2) {
      if (selections[0] === selections[1]) {
        const updatedScore: PlayerInfo[] = players.map((player) => {
          if (currentPlayer === player.name) {
            return { name: player.name, score: player.score + 1 };
          }
          return player;
        });
        setPlayers(updatedScore);
        setTotalScore(totalScore + 1);
        setTurn(1);
        setSelections([]);
      } else {
        const newData = circles?.map((circle) => {
          if (circle.name === selections[0] || circle.name === selections[1]) {
            return { ...circle, hidden: true };
          }
          return circle;
        });
        setTimeout(() => {
          setCircles(newData);
          const currentPlayerIndex = players.findIndex((player) => {
            return player.name === currentPlayer;
          });
          setCurrentPlayer(
            currentPlayerIndex < players.length - 1
              ? players[currentPlayerIndex + 1].name
              : players[0].name
          );
          setTurn(1);
          setSelections([]);
        }, 2000);
      }
    }
  }, [circles, currentPlayer, players, selections, setPlayers, totalScore]);

  useEffect(() => {
    if (circles && totalScore === circles.length / 2) {
      let winner;
      for (let i = 0; i < players.length; i++) {
        if (i === 0) {
          winner = players[i].name;
        }
        if (i > 0) {
          if (players[i].score > players[i - 1].score) {
            winner = players[i].name;
          } else if (players[i].score === players[i - 1].score) {
            winner = "Tie";
          }
        }
      }
      setWinner(winner);
    }
  }, [circles, players, totalScore]);

  return (
    <>
      <h2 className="text-3xl text-rose-700 font-bold italic mb-4">
        {currentPlayer}&apos;s turn
      </h2>
      <div>
        {players.map((player) => (
          <p key={player.name} className="text-2xl text-center">
            {player.name}: {player.score}
          </p>
        ))}
      </div>
      {winner && winner !== "Tie" && (
        <p className="m-4 text-3xl font-bold italic">{winner} wins!</p>
      )}
      {winner && winner === "Tie" && (
        <p className="m-4 text-3xl font-bold italic">It&apos;s a tie!</p>
      )}
      <div className="border-8 rounded-md border-green-700 bg-[#f5d493] my-8 flex flex-wrap justify-center w-[1000px]">
        {circles?.map((circle: GameObject) => (
          <Circle
            key={circle.id}
            name={circle.name}
            image={circle.image}
            hidden={circle.hidden}
            onClick={() => takeTurn(circle.id)}
          />
        ))}
      </div>
      <button
        className="my-4 p-4 bg-orange-400 active:bg-orange-500 text-white rounded-lg"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </>
  );
};

export default Board;
