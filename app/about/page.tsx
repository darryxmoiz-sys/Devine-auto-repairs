import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Devine Auto Repairs",
  description: "Run by Sean Devine, based in Newmills, Co. Tyrone.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-ink)]/10">
        <div className="mx-auto max-w-[1320px] px-5 pb-12 pt-12 md:px-10 md:pt-16">
          <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] md:text-6xl">
            Run out of Newmills, and out on the road most days.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-20">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:h-full md:min-h-[420px]">
            <Image
              src="/jobs/7-branded-van.jpg"
              alt="Devine Auto Repairs branded recovery van on the road near Dungannon"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:col-span-6">
          <p className="text-lg leading-relaxed text-[var(--color-ink)]/75">
            Devine Auto Repairs is based at 23 Glencon Rd in Newmills, just
            outside Dungannon — but a good part of the job happens away from
            the workshop entirely.
          </p>
          <p className="mt-5 leading-relaxed text-[var(--color-ink)]/75">
            Sean started taking the air-con rig out to farms after one too
            many calls from people who couldn&rsquo;t get a tractor or a JCB
            anywhere near a normal workshop. It grew from there into
            recovery, then boats, then whatever else turned up.
          </p>
          <p className="mt-5 leading-relaxed text-[var(--color-ink)]/75">
            The workshop still does the usual jobs — MOT prep, servicing,
            remapping, tyres. But if your call starts with &ldquo;this is a
            weird one,&rdquo; that&rsquo;s usually when we get most
            interested.
          </p>
        </div>
      </section>
    </>
  );
}
