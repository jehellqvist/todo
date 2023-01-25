import "./Button.scss";
type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      role="button"
      className="button"
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
