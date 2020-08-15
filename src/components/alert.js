const Alert = ({row1, row2}) => {
  return (
    <div className="alert alert--fixed">
      <p>{row1}</p>
      <p>{row2}</p>
    </div>
  );
};

export default Alert;
