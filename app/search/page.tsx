import { AppShell } from "@/components/navigation";
import { UnderConstruction } from "@/components/under-construction";

export default function SearchPage() {
  return (
    <AppShell active="Search">
      <UnderConstruction
        title="Search is taking shape."
        description="We’re making a thoughtful way to find people and ideas. It’ll be ready in a future update."
      />
    </AppShell>
  );
}
