import Image from "next/image";
import { CircleProps } from "../interfaces";

const Circle = (circle: CircleProps) => {
  return (
    <div
      onClick={circle.onClick}
      className="relative w-32 m-4 cursor-pointer h-32 flex justify-center items-center rounded-full bg-white"
    >
      <Image
        className="rounded-full"
        src={circle.image}
        alt={circle.name}
        width={250}
        height={250}
        objectFit="cover"
        objectPosition="100% 100%"
      />
      <div
        className={`absolute w-32 h-32 bg-blue-500 active:bg-blue-600 rounded-full cursor-pointer ${
          circle.hidden === true ? "visible" : "invisible"
        }`}
      />
    </div>
  );
};

export default Circle;
