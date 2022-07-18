import { useEffect, useState } from "react";
import { dataArray } from "../constants/data";
import { GameObject } from "../constants/data";
import Circle from "./Circle";

type Player = "Player 1" | "Player 2" | "Tie" | null;

const shuffle = (array: GameObject[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface Scoreboard {
  player1: number;
  player2: number;
}

const initialScores: Scoreboard = {
  player1: 0,
  player2: 0,
};

const Board = () => {
  const [circles, setCircles] = useState<GameObject[]>();
  const [currentPlayer, setCurrentPlayer] = useState<"Player 1" | "Player 2">(
    "Player 1"
  );
  const [scores, setScores] = useState<Scoreboard>(initialScores);
  const [turn, setTurn] = useState<number>(1);
  const [selections, setSelections] = useState<string[]>([]);
  const [winner, setWinner] = useState<Player>(null);

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
    setCircles(shuffle(dataArray));
    setCurrentPlayer("Player 1");
    setScores(initialScores);
    setWinner(null);
  };

  useEffect(() => {
    setCircles(shuffle(dataArray));
  }, []);

  useEffect(() => {
    if (selections.length === 2) {
      if (selections[0].slice(0, -1) === selections[1].slice(0, -1)) {
        if (currentPlayer === "Player 1") {
          setScores({ ...scores, player1: scores.player1 + 1 });
        } else {
          setScores({ ...scores, player2: scores.player2 + 1 });
        }
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
          setCurrentPlayer((c) => (c === "Player 1" ? "Player 2" : "Player 1"));
          setTurn(1);
          setSelections([]);
        }, 2000);
      }
    }
  }, [circles, currentPlayer, scores, selections]);

  useEffect(() => {
    if (circles && scores.player1 + scores.player2 === circles.length / 2) {
      if (scores.player1 > scores.player2) {
        setWinner("Player 1");
      } else if (scores.player2 > scores.player1) {
        setWinner("Player 2");
      } else {
        setWinner("Tie");
      }
    }
  }, [circles, scores.player1, scores.player2]);

  return (
    <>
      <h2 className="text-3xl mb-4">{currentPlayer}&apos;s turn</h2>
      <h3 className="text-2xl">Scoreboard</h3>
      <div>
        <p className="text-xl">Player 1: {scores.player1}</p>
        <p className="text-xl">Player 2: {scores.player2}</p>
      </div>
      {winner && winner !== "Tie" && (
        <p className="m-4 text-3xl font-bold italic">{winner} wins!</p>
      )}
      {winner && winner === "Tie" && (
        <p className="m-4 text-3xl font-bold italic">It&apos;s a tie!</p>
      )}
      <div className="my-8 flex flex-wrap justify-center w-[1000px]">
        {circles?.map((circle: GameObject) => (
          <Circle
            key={circle.id}
            id={circle.id}
            name={circle.name}
            image={circle.image}
            hidden={circle.hidden}
            onClick={() => takeTurn(circle.id)}
          />
        ))}
      </div>
      <button className="my-4 p-4 bg-orange-400 rounded-lg" onClick={resetGame}>
        Reset Game
      </button>
    </>
  );
};

export default Board;
