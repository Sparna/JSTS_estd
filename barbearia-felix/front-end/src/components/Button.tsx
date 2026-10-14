import { Link } from "react-router";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "negative";
};

const Button = ({
  title,
  className = "",
  onClick,
  to,
  type = "submit",
  variant = "primary",
}: ButtonProps) => {
  const colorClasses = variant === "negative"
    ? "bg-black text-[#D99A32] border-black hover:bg-[#333333]"
    : "bg-[#D99A32] border-[#999999] hover:bg-[#E0D1B9]";
  const buttonClasses = `${colorClasses} h-[34px] font-bold text-sm rounded-md ${className}`;

  if (to) {
    return (
      <Link to={to} className={`flex items-center justify-center ${buttonClasses}`}>
        {title}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${buttonClasses} border`}>
      {title}
    </button>
  );
}

export default Button;
