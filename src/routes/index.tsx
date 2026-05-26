import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h1>hemvist</h1>
    </main>
  );
}
