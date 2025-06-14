import { useRef, useEffect, useState } from "react";
import type { FunctionComponent } from "../common/types";
import { Button } from "@/components/ui/Button";

export const Home = (): FunctionComponent => {
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

	return (
		<div className="h-screen relative container mx-auto px-4">
			<div
				ref={firstDivRef}
				className="min-h-[346px] w-full absolute top-1/2 left-1/2 -translate-y-[85%] -translate-x-1/2"
			>
				<div className="relative"></div>
			</div>
			<div
				className="w-full"
				style={{
					position: "absolute",
					top: `${secondDivPosition.top}px`,
					left: `${0}px`,
				}}
			>
				<div className="flex flex-col items-center gap-6 lg:gap-8 px-4">
					<h1 className="text-2xl lg:text-3xl text-white text-center max-w-[457px] leading-[120%]">
						Compare your thoughts on
						<span className="gradient-text"> technology</span> with current
						<br />
						industry opinions.
					</h1>
					<Button className="py-[19px] px-[35px] lg:text-lg w-full lg:w-auto">
						Get a reality check
					</Button>
				</div>
			</div>
		</div>
	);
};
