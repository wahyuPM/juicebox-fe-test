import React, {
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
	slides: React.ReactNode[];
	disableDotClick?: boolean;
	disableWatchDrag?: boolean;
}

export interface CarouselHandle {
	scrollTo: (index: number) => void;
	scrollNext: () => void;
	scrollPrev: () => void;
}

const Carousel = React.forwardRef<CarouselHandle, CarouselProps>(
	({ slides, disableDotClick = false, disableWatchDrag = false }, ref) => {
		const [emblaRef, emblaApi] = useEmblaCarousel({
			loop: true,
			watchDrag: !disableWatchDrag,
		});
		const [selectedIndex, setSelectedIndex] = useState(0);

		const onSelect = useCallback(() => {
			if (!emblaApi) return;
			setSelectedIndex(emblaApi.selectedScrollSnap());
		}, [emblaApi]);

		useEffect(() => {
			if (!emblaApi) return;
			emblaApi.on("select", onSelect);
			onSelect();
		}, [emblaApi, onSelect]);

		useImperativeHandle(ref, () => ({
			scrollTo: (index: number) => {
				if (emblaApi) emblaApi.scrollTo(index);
			},
			scrollNext: () => {
				if (emblaApi) emblaApi.scrollNext();
			},
			scrollPrev: () => {
				if (emblaApi) emblaApi.scrollPrev();
			},
		}));

		return (
			<div className="relative overflow-hidden" ref={emblaRef}>
				<div className="flex mb-4">
					{slides.map((slide, index) => (
						<div className="flex-[0_0_100%]" key={index}>
							{slide}
						</div>
					))}
				</div>
				<div className="flex justify-center w-full">
					{slides.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full mx-1 transition-colors cursor-pointer ${
								index === selectedIndex ? "bg-[#B488F2]" : "bg-[#FAFAFA]"
							}`}
							onClick={() =>
								!disableDotClick && emblaApi && emblaApi.scrollTo(index)
							}
							disabled={disableDotClick} // Disable the button if disableDotClick is true
						/>
					))}
				</div>
			</div>
		);
	}
);

export default Carousel;
