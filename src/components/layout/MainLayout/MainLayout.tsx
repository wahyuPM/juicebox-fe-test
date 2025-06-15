import React from "react";
import { Outlet, useLocation } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import Hexagon from "@/assets/img/hexagon.png";

const MainLayout: React.FC = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<>
			<Navbar />
			<main className="bg-primary relative">
				<img
					src={Hexagon}
					alt="juicebox"
					className={`absolute top-1/2 left-1/2 -translate-y-[90%] -translate-x-1/2 transition-transform duration-300 ${
						!isHomePage ? "scale-50" : "scale-100"
					}`}
				/>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
