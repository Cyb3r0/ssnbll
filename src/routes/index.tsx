import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/store/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AppShell />;
}
