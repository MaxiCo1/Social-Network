type PostCountProps = {
  count: number;
};

const PostCounter = ({ count }: PostCountProps) => {
  const label = count > 1 ? "posteos" : "posteo";
  return (
    <>
      {count}
      {label}
    </>
  );
};

export default PostCounter;
