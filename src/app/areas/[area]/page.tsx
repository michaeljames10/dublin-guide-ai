import { getSummary } from "@/lib/getSummary";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function AreaPage({ params }: { params: any }) {
  const html = await getSummary(params.area);

  if (!html) return notFound();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold capitalize">{params.area}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
