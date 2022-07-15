import Image from "next/image";

const Circle = ({
  id,
  name,
  image,
  hidden,
  onClick,
}: {
  id: number;
  name: string;
  image: string;
  hidden: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-32 m-4 cursor-pointer h-32 flex justify-center items-center rounded-full bg-white`}
    >
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={250}
        height={250}
        objectFit="cover"
        objectPosition="100% 100%"
      />
      <div
        className={`absolute w-32 h-32 bg-blue-500 rounded-full cursor-pointer ${
          hidden === true ? "invisible" : "invisible"
        }`}
      />
    </div>
  );
};

export default Circle;
