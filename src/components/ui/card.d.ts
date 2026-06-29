import { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
export const CardHeader: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
export const CardTitle: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
export const CardDescription: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
export const CardContent: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
export const CardFooter: ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>>;
