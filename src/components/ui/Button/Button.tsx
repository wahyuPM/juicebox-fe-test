import React from "react";
import { cn } from "@/components/utils/twMerge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	className = "",
	icon,
	children,
	...props
}) => {
	return (
		<button
			className={cn(
				"px-4 py-2 bg-accent text-primary hover:text-light hover:bg-transparent transition-colors duration-300 cursor-pointer hover:ring-accent border border-accent rounded-2xl",
				className
			)}
			{...props}
		>
			{icon && icon}
			{children}
		</button>
	);
};

export default Button;
