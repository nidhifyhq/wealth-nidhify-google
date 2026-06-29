import { ButtonHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  loading?: boolean;
  asChild?: boolean;
}

export const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;
export const buttonVariants: (props?: ButtonProps) => string;
