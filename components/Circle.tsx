const Circle = ({
  id,
  name,
  hidden,
  onClick,
}: {
  id: number;
  name: string;
  hidden: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-blue-500 border-black rounded-full m-4"
    >
      <div
        className={`p-4 w-20 h-20 rounded-full bg-red-300 ${
          hidden === true ? "invisible" : "visible"
        }`}
      >
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Circle;
