import { createFileRoute } from "@tanstack/react-router";
import GetStarted from "@/pages/GetStarted";

export const Route = createFileRoute("/get-started")({
	component: GetStarted,
});
