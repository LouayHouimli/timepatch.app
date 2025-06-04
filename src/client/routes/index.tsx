import { trpc } from "@client/lib/trpc-client";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useQuery(trpc.user.getProfile.queryOptions());
  const firstName = user.data?.name.split(" ")[0];

  return (
    <div className="flex items-center justify-center mx-auto">
      Hello to TimePatch :  {firstName ? firstName : "Guest"}

    </div>
  );
}
