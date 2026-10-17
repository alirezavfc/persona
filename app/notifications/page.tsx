import { AppShell } from "@/components/navigation";
import { UnderConstruction } from "@/components/under-construction";

export default function NotificationsPage() {
  return (
    <AppShell active="Notifications">
      <UnderConstruction
        title="A little quiet for now."
        description="Notifications are still being designed. When they arrive, they’ll help you stay close to the conversations that matter."
      />
    </AppShell>
  );
}
