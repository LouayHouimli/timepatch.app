"use client";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const healthCheck = useQuery(trpc.healthCheck.queryOptions());

	return (
		<div className="container mx-auto max-w-3xl px-4 py-2">Time Patch v1</div>
	);
}
