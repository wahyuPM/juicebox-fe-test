import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg?react";
import { Button } from "@/components/ui/Button";

const GetStarted = () => {
	const [step, setStep] = useState(1);
	const [inputValue, setInputValue] = useState("");
	const [name, setName] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleButtonClick = () => {
		if (step === 1) {
			// Save the name and move to the next step
			setName(inputValue);
			setStep(2);
			setInputValue(""); // Clear the input for the next step
		} else if (step === 2) {
			// Handle email submission and move to the final step
			console.log("Email submitted:", inputValue);
			setStep(3);
		}
	};

	const titleHTML =
		step === 1
			? "Let’s start with the basics. Type in your <br /> first name."
			: step === 2
				? "How should we contact you? <br /> Type in your email address."
				: `Thanks, ${name}! Now, it’s time to get a reality check. <br /> This will take 2-3 minutes.`;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="h-screen container mx-auto px-4 pt-[200px] relative"
		>
			<p
				className="text-white text-center text-lg"
				dangerouslySetInnerHTML={{ __html: titleHTML }}
			/>
			{step < 3 ? (
				<div className="absolute bottom-10 left-0 right-0 flex justify-center mb-4 px-4">
					<div className="relative w-full max-w-md">
						<input
							type={step === 1 ? "text" : "email"}
							placeholder={
								step === 1
									? "Enter your first name"
									: "Enter your email address"
							}
							value={inputValue}
							onChange={handleInputChange}
							className="w-full py-4 px-4 pr-12 bg-transparent border border-white rounded-xl text-white placeholder-white focus:outline-none"
						/>
						<Button
							icon={<ArrowUpIcon />}
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#545557] rounded-full h-[31px] w-[31px] flex items-center justify-center p-0 border-none hover:bg-accent"
							onClick={handleButtonClick}
						></Button>
					</div>
				</div>
			) : (
				<div className="absolute bottom-10 left-0 right-0 flex justify-center mb-4 px-4">
					<Button className="py-[19px] px-[35px] lg:text-lg w-full max-w-md bg-white text-primary border-white">
						Continue
					</Button>
				</div>
			)}
		</motion.div>
	);
};

export default GetStarted;
