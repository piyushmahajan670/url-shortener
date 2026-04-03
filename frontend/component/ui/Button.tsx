type ButtonVariant = "default" | "ghost" | "outline";
type ButtonSize = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  outline: "border border-input bg-background hover:bg-accent",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
};

export default function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "rounded-md",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}