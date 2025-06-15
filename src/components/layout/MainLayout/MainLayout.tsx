import React from "react";
import { Outlet, useLocation } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import Hexagon from "@/assets/img/hexagon.png";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout: React.FC = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const isGetStartedPage = location.pathname === "/get-started";

	return (
		<>
			<Navbar />
			<main className="bg-primary relative">
				<motion.img
					src={Hexagon}
					alt="juicebox"
					initial={{ opacity: 1, scale: 1, top: "50%", y: "-90%" }}
					animate={{
						opacity: 1,
						scale: isGetStartedPage ? 0.1 : !isHomePage ? 0.5 : 1,
						top: isGetStartedPage ? "0px" : "50%",
						y: isGetStartedPage ? "5%" : "-90%",
					}}
					transition={{
						scale: { duration: 0.3 },
						top: { delay: 0.3, duration: 0.3 },
						y: { delay: 0.3, duration: 0.3 },
					}}
					className="absolute left-1/2 -translate-x-1/2 transition-all duration-300"
					style={{
						filter: !isHomePage
							? "drop-shadow(0 0 50px rgba(205, 170, 255, 0.5))"
							: "none", // Apply glow only when not on home page
					}}
				/>
				<AnimatePresence mode="wait">
					<motion.div key={location.pathname}>
						<Outlet />
					</motion.div>
				</AnimatePresence>
			</main>
		</>
	);
};

export default MainLayout;
