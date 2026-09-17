import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services — Devine Auto Repairs",
  description:
    "MOT prep, servicing, remapping, tyres, mobile air-con on plant and machinery, and 24/7 recovery.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-ink)]/10">
        <div className="mx-auto max-w-[1320px] px-5 pb-12 pt-12 md:px-10 md:pt-16">
          <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] md:text-6xl">
            Everything on four wheels, and a fair bit that isn&rsquo;t.
          </h1>
        </div>
      </section>

      {/* ---------------- MOBILE A/C ---------------- */}
      <section
        id="air-con"
        className="scroll-mt-20 mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-20"
      >
        <div className="md:col-span-6 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:h-full md:min-h-[420px]">
            <Image
              src="/jobs/3-jcb-loadall.jpg"
              alt="A JCB loadall having its air-conditioning regassed on site"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:col-span-6 md:order-1">
          <h2 className="text-3xl font-bold md:text-4xl">Mobile air-conditioning</h2>
          <p className="mt-4 leading-relaxed text-[var(--color-ink)]/75">
            We bring the regas rig to the machine — farm yard, quarry, or your
            own driveway. Full diagnostic, regas, and a check for leaks before
            we leave, on:
          </p>
          <ul className="mt-5 space-y-2 text-[var(--color-ink)]/80">
            <li className="docket-row py-2">Cars and vans</li>
            <li className="docket-row py-2">Tractors and combines</li>
            <li className="docket-row py-2">JCBs, loadalls and plant</li>
            <li className="py-2">Lorries and HGVs</li>
          </ul>
        </div>
      </section>

      {/* ---------------- RECOVERY ---------------- */}
      <section
        id="recovery"
        className="scroll-mt-20 border-y border-[var(--color-ink)]/10 bg-[var(--color-ink)] text-[var(--color-paper)]"
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-20">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:h-full md:min-h-[420px]">
              <Image
                src="/jobs/4-rta-van.jpg"
                alt="A van recovered after a road traffic accident, loaded on a flatbed"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:col-span-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--color-beacon)] px-3 py-1 text-xs font-semibold text-[var(--color-ink)]">
              24 hours, 7 days
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Recovery</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-steel-light)]">
              Broken down, been in a collision, or a vehicle just needs
              moving — cars, vans, agricultural plant, and boats. If you
              can&rsquo;t get it home, we can.
            </p>
            <a
              href="tel:07871955395"
              className="mt-7 inline-block w-fit rounded-sm bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-signal-hover)]"
            >
              Need recovery now — call 07871 955395
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- CORE GARAGE SERVICES ---------------- */}
      <section id="workshop" className="scroll-mt-20 mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
        <h2 className="max-w-xl text-3xl font-bold md:text-4xl">
          The regular workshop jobs
        </h2>
        <div className="mt-10">
          {[
            {
              name: "MOT preparation",
              detail:
                "We check it against the test schedule and fix what's likely to fail, before you book the actual test.",
            },
            {
              name: "Servicing",
              detail:
                "Interim and full services, and manufacturer schedule servicing that keeps your warranty intact.",
            },
            {
              name: "Remapping",
              detail:
                "ECU remaps tuned for either more power or better economy, depending on what the vehicle's for.",
            },
            {
              name: "Tyres",
              detail:
                "Supplied and fitted for cars and light commercials, with balancing and tracking checked after.",
            },
          ].map((service) => (
            <div
              key={service.name}
              className="docket-row grid grid-cols-1 gap-1 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <span className="text-xl font-semibold">{service.name}</span>
              <span className="leading-relaxed text-[var(--color-ink)]/70">
                {service.detail}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
