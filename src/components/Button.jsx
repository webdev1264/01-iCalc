import "./Button.css";

const Button = ({ className, btnName, onClick }) => {
  return (
    <div
      onClick={(event) => onClick(event)}
      value={btnName}
      className={className}
    >
      {btnName}
    </div>
  );
};

export default Button;
