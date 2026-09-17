import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery — Devine Auto Repairs",
  description: "Real jobs: mobile air-con, recovery, and the workshop.",
};

const JOBS = [
  {
    src: "/jobs/1-tractor-ac.jpg",
    caption: "Case IH Puma 5150 — air-con service, Tullyallen, 8:45pm",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/jobs/2-jcb-ac-shed.jpg",
    caption: "JCB regas inside a working recycling shed, Portadown",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/jobs/3-jcb-loadall.jpg",
    caption: "JCB loadall, full regas on-site",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/jobs/4-rta-van.jpg",
    caption: "Recovered after a road traffic accident",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/jobs/5-rta-dusk.jpg",
    caption: "Roadside recovery, loaded at dusk",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/jobs/6-boat-storage.jpg",
    caption: "Boat craned in for winter storage, Newmills workshop",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/jobs/7-branded-van.jpg",
    caption: "Range Rover recovery, Dungannon",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
      <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] md:text-6xl">
        Real jobs, as they happened.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
        {JOBS.map((job) => (
          <figure key={job.src} className={job.span}>
            <div className={`relative w-full overflow-hidden rounded-sm ${job.aspect}`}>
              <Image
                src={job.src}
                alt={job.caption}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-[var(--color-ink)]/65">
              {job.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
