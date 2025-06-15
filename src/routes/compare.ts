import { createFileRoute } from "@tanstack/react-router";
import Compare from "@/pages/Compare";
import { z } from "zod";

const searchSchema = z.object({
	slideIndex: z.string().optional(),
});

export const Route = createFileRoute("/compare")({
	component: Compare,
	validateSearch: searchSchema.parse,
});
