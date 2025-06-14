import React from "react";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import Hexagon from "@/assets/img/hexagon.png";

const MainLayout: React.FC = () => {
	return (
		<>
			<Navbar />
			<main className="bg-primary relative">
				<img
					src={Hexagon}
					alt="juicebox"
					className="absolute top-1/2 left-1/2 -translate-y-[90%] -translate-x-1/2"
				/>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
