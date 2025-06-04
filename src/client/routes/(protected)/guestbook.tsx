import { Guestbook } from "@client/routes/(protected)/-components/guestbook";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/guestbook")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container mx-auto w-full min-w-0 max-w-[90vw] px-3 py-2 sm:max-w-2xl sm:px-4 md:max-w-3xl">
			<Guestbook />
		</div>
	);
}
