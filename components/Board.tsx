import { useEffect, useState } from "react";
import { dataArray } from "../constants/data";
import { Thing } from "../constants/data";
import Circle from "./Circle";

const shuffle = (array: Thing[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Board = () => {
  const [circles, setCircles] = useState<Thing[]>([]);

  useEffect(() => {
    setCircles(shuffle(dataArray));
  }, []);

  return (
    <div>
      {circles.map((circle: Thing) => (
        <Circle
          key={circle.id}
          id={circle.id}
          name={circle.name}
          onClick={() => console.log("click")}
        />
      ))}
    </div>
  );
};

export default Board;
