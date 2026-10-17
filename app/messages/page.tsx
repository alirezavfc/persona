import { AppShell } from "@/components/navigation";
import { UnderConstruction } from "@/components/under-construction";

export default function MessagesPage() {
  return (
    <AppShell active="Messaging">
      <UnderConstruction
        title="Messages are on their way."
        description="Private conversations aren’t available yet. Persona is starting with the basics, one considered step at a time."
      />
    </AppShell>
  );
}
