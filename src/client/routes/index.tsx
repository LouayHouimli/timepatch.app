import { Button } from "@client/components/ui/button";
import { trpc } from "@client/lib/trpc-client";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  const user = healthCheck.data;
  return (
    <div>
      Hello from TimePatch {user}
      <Button variant="default" onClick={() => console.log("Clicked")}>
        Click me
      </Button>
    </div>
  );
}
