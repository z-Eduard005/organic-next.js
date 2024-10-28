import Image from "next/image";
import Arrow from "./arrow.svg";

type Variant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  hasArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  hasArrow = false,
  ...props
}) => {
  const baseStyles =
    "rounded-2xl flex items-center justify-center px-12 py-7 font-bold font-roboto text-[1.25rem] trasition-opacity duration-150 hover:opacity-90";

  const variantStyles: Record<Variant, string> = {
    primary: "bg-[--color-primary] text-white",
    secondary: "bg-[--color-accent] text-[--color-primary]",
    outline:
      "bg-transparent outline outline-[--color-primary] outline-[1.5px] text-[--color-primary]",
  };

  const arrowBg =
    variant === "primary" ? "bg-[#335B6B]" : "bg-[--color-primary]";

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
      {hasArrow && (
        <div className={`${arrowBg} rounded-full p-[6px] ml-2.5`}>
          <Image src={Arrow} alt="arrow" />
        </div>
      )}
    </button>
  );
};

export default Button;
