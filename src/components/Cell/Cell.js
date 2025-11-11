const Cell = ({ letters, status }) => {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letters}</span>;
};

export default Cell;
