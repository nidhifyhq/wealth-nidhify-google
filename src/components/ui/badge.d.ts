import { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "secondary" | "outline";
}

export const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLDivElement>>;
export const badgeVariants: (props?: BadgeProps) => string;
