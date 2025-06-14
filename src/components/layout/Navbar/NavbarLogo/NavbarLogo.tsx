import React from "react";
import Logo from "@/assets/icons/logo.svg?react";

interface NavbarLogoProps {
	className?: string;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => {
	return <Logo className={className} />;
};

export default NavbarLogo;
