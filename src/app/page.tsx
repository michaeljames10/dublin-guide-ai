import Image from "next/image";
import ButtonWrapper from "@/components/buttonWrapper";
import VisitedAreas from "@/components/visitedAreas";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pt-4 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full max-w-xl">
        <Image
          aria-hidden
          src="/dublin_skyline.png"
          alt="Image of Dublin skyline"
          width={400}
          height={200}
        />
        <h1>Your Local Guide to Dublin’s Neighbourhoods</h1>

        <h3>
          Unfiltered guides written with local heart—history, homes, hangouts,
          and hidden gems
        </h3>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ButtonWrapper />
        </div>
        <div className="flex flex-col w-full gap-4 items-stretch">
          <VisitedAreas />
        </div>
      </main>
    </div>
  );
}
