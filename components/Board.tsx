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

const Board = () => {
  const [circles, setCircles] = useState<GameObject[]>();
  const [currentPlayer, setCurrentPlayer] = useState<"Player 1" | "Player 2">(
    "Player 1"
  );
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

  useEffect(() => {
    setCircles(shuffle(dataArray));
  }, []);

  useEffect(() => {
    if (selections.length === 2) {
      if (selections[0].slice(0, -1) === selections[1].slice(0, -1)) {
        console.log("match");
      } else {
        console.log("no match");
        const newData = circles?.map((circle) => {
          if (circle.name === selections[0] || circle.name === selections[1]) {
            return { ...circle, hidden: true };
          }
          return circle;
        });
        setTimeout(() => {
          setCircles(newData);
        }, 2000);
      }

      setTimeout(() => {
        setTurn(1);
        setSelections([]);
      }, 2000);
    }
  }, [circles, selections]);

  return (
    <div className="flex flex-wrap w-2/3">
      {circles?.map((circle: GameObject) => (
        <Circle
          key={circle.id}
          id={circle.id}
          name={circle.name}
          hidden={circle.hidden}
          onClick={() => takeTurn(circle.id)}
        />
      ))}
    </div>
  );
};

export default Board;
