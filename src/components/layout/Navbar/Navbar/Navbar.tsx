import React from "react";
import { Button } from "@/components/ui/Button";
import NavbarLogo from "../NavbarLogo/NavbarLogo";
import RefreshIcon from "@/assets/icons/refresh-icon.svg?react";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import { useLocation } from "@tanstack/react-router";

const Navbar: React.FC = () => {
	const location = useLocation();
	return (
		<nav className="fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto px-4">
				<div
					className={`flex items-center h-[86px] relative ${location.pathname !== "/" ? "justify-between" : "justify-end"}`}
				>
					{location.pathname !== "/" && (
						<Button
							className="rounded-full bg-[#252932] h-[46px] aspect-square hover:bg-accent shadow border-0"
							icon={<ArrowLeft />}
						></Button>
					)}
					<NavbarLogo className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 " />
					<Button
						className="rounded-full bg-[#252932] h-[46px] aspect-square hover:bg-accent shadow border-0"
						icon={<RefreshIcon />}
					></Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
