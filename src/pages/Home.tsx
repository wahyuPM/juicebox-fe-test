import { useRef, useEffect, useState } from "react";
import type { FunctionComponent } from "../common/types";
import { Button } from "@/components/ui/Button";
import { useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Home = (): FunctionComponent => {
	const router = useRouter();
	const firstDivRef = useRef<HTMLDivElement | null>(null);
	const [secondDivPosition, setSecondDivPosition] = useState({
		top: 0,
	});

	useEffect(() => {
		if (firstDivRef.current) {
			const rect = firstDivRef.current.getBoundingClientRect();
			setSecondDivPosition({
				top: rect.bottom + 20, // 20px below the first div
			});
		}
	}, []);

	const handleButtonClick = () => {
		router.navigate({ to: "/compare" });
	};

	return (
		<motion.div
			className="h-screen relative container mx-auto px-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div
				ref={firstDivRef}
				className="h-[346px] w-full absolute top-1/2 left-1/2 -translate-y-[85%] -translate-x-1/2 flex items-center justify-center"
			>
				<div className="relative h-full min-w-[274px]">
					<p className="absolute top-[50px] -left-10 text-white text-sm text-nowrap">
						WA businesses feel confident about future growth{" "}
					</p>
					<p className="absolute top-[100px] -right-10 text-white text-sm text-nowrap">
						AI cant replace creativity
					</p>
					<p className="absolute top-[150px] -left-10 text-white text-sm text-nowrap">
						Sales measure true success
					</p>
					<p className="absolute bottom-[110px] -right-10 text-white text-sm text-nowrap">
						Human connection drives WA business
					</p>
					<p className="absolute bottom-[30px] -left-10 text-white text-sm">
						The primary barrier to digital <br /> transformation is financial
						investment
					</p>
				</div>
			</div>
			<div
				className="w-full"
				style={{
					position: "absolute",
					top: `${secondDivPosition.top}px`,
					left: `${0}px`,
				}}
			>
				<div className="flex flex-col items-center gap-6 lg:gap-10 px-4">
					<h1 className="text-2xl lg:text-3xl text-white text-center max-w-[457px] leading-[120%]">
						Compare your thoughts on
						<span className="gradient-text"> technology</span> with current
						<br />
						industry opinions.
					</h1>
					<Button
						onClick={handleButtonClick}
						className="py-[19px] px-[35px] lg:text-lg w-full max-w-md"
					>
						Get a reality check
					</Button>
				</div>
			</div>
		</motion.div>
	);
};
