import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Carousel, { CarouselHandle } from "@/components/carousel/Carousel";
import { useSearch, useNavigate } from "@tanstack/react-router";

const slides = [
	<div className="text-center text-white px-4 text-xl mb-4">
		Professionals around the world <br /> shared how they feel about <br />{" "}
		technology and I’ve listened. Now it’s your turn.
	</div>,
	<div className="text-center text-white px-4 text-xl mb-4">
		I’ll ask you a handful of meaningful questions and compare your responses
		with people in your industry.
	</div>,
	<div className="text-center text-white px-4 text-xl mb-4">
		You’ll get insights into current industry sentiments and a reality check
		about technology in a few minutes. Deal? Great!
	</div>,
];

const Compare: React.FC = () => {
	const search = useSearch({ from: "/compare" });
	const navigate = useNavigate();
	const carouselRef = useRef<CarouselHandle>(null);

	// Initialize slideIndex from query parameter or default to 0
	const slideIndex = Number(search.slideIndex) || 0;

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollTo(slideIndex);
		}
	}, [slideIndex]);

	const handleNext = () => {
		const nextIndex = (slideIndex + 1) % slides.length;
		navigate({
			from: "/compare",
			search: { slideIndex: nextIndex.toString() },
		});
	};

	const handleGetStarted = () => {
		navigate({
			to: "/get-started",
			search: { slideIndex: slideIndex.toString() }, // Persist slideIndex
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="h-screen relative container mx-auto px-4"
		>
			<div className="absolute top-[50%] left-0 text-white w-full">
				<div className="flex flex-col items-center gap-10 px-4">
					<div className="max-w-md">
						<Carousel
							ref={carouselRef}
							slides={slides}
							disableDotClick
							disableWatchDrag
						/>
					</div>
					{slideIndex === slides.length - 1 ? (
						<Button
							onClick={handleGetStarted}
							className="py-[19px] px-[35px] lg:text-lg w-full max-w-md bg-white text-primary border-white"
						>
							Get Started
						</Button>
					) : (
						<Button
							onClick={handleNext}
							className="py-[19px] px-[35px] lg:text-lg w-full max-w-md bg-primary text-white border-white"
						>
							Continue
						</Button>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Compare;
