const Circle = ({
  id,
  name,
  onClick,
}: {
  id: number;
  name: string;
  onClick: () => void;
}) => {
  return <div>{name}</div>;
};

export default Circle;
