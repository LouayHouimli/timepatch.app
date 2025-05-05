"use client";
import { trpc } from "@/utils/trpc";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  const test = useMutation(trpc.ai.test.mutationOptions());
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={() => {
          setIsLoading(true);
          test.mutate(
            { prompt },
            {
              onSuccess: (data) => setResult(data),
              onSettled: () => setIsLoading(false),
            }
          );
        }}
      >
        Patch My Day
      </button>
      {isLoading && <p>Loading...</p>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
