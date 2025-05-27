import { getAreas } from "@/lib/getAreas";
import { Badge, Title } from "@mantine/core";
import { AnimatedAreas } from "./animatedAreas";

export default async function AreasPage() {
  const areas = await getAreas();

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <Title order={1} fw={900} mb="sm">
        Explore Dublin&apos;s Neighborhoods
      </Title>
      <Badge mb="lg">{`${areas.length} locations`}</Badge>

      <AnimatedAreas showSearch={true} areas={areas} />
    </main>
  );
}
