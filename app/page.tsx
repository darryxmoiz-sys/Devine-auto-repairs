import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-[var(--color-ink)]/10">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 pb-14 pt-12 md:grid-cols-12 md:gap-8 md:px-10 md:pb-20 md:pt-16">
          <div className="flex flex-col justify-center md:col-span-5">
            <p className="load-in text-sm text-[var(--color-steel)]">
              Newmills, Co. Tyrone
            </p>
            <h1
              className="load-in mt-4 text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl"
              style={{ animationDelay: "0.08s" }}
            >
              If it&rsquo;s broken, we&rsquo;ll come and look at it.
            </h1>
            <p
              className="load-in mt-6 max-w-md text-lg leading-relaxed text-[var(--color-ink)]/75"
              style={{ animationDelay: "0.18s" }}
            >
              Servicing, MOT prep, remapping and tyres in the workshop. Air-con
              regassed on-site for tractors and plant. Recovery day or night,
              anywhere it&rsquo;s needed.
            </p>
            <div
              className="load-in mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.28s" }}
            >
              <a
                href="tel:07871955395"
                className="rounded-sm bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-paper)] transition-colors hover:bg-[var(--color-signal-hover)]"
              >
                Call 07871 955395
              </a>
              <Link
                href="/services"
                className="text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-steel-light)] underline-offset-4 transition-colors hover:decoration-[var(--color-ink)]"
              >
                See everything we do
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm md:h-full md:min-h-[440px]">
              <Image
                src="/jobs/1-tractor-ac.jpg"
                alt="Air-conditioning service on a Case IH tractor, done on-site at Tullyallen, 8:45pm"
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-sm bg-[var(--color-ink)]/85 px-4 py-2.5 text-[var(--color-paper)] backdrop-blur">
              <span className="beacon-dot h-2 w-2 rounded-full bg-[var(--color-beacon)]" />
              <span className="text-sm">On call tonight — this job finished 8:45pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TWO THINGS NOBODY ELSE ROUND HERE DOES ---------------- */}
      <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
        <h2 className="max-w-2xl text-4xl font-bold leading-[1.02] md:text-5xl">
          Two jobs most garages turn away.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/jobs/2-jcb-ac-shed.jpg"
                alt="Full air-conditioning regas on a JCB, done inside a working recycling shed at Portadown Christian Centre"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Mobile air-con, on your machine</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-ink)]/75">
              Tractors, JCBs, loadalls, lorries — if it has a cab, we&rsquo;ll
              regas it where it sits. No trailering a 20-tonne machine across
              the county for a service most garages can&rsquo;t do anyway.
            </p>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/jobs/5-rta-dusk.jpg"
                alt="Vehicle recovered from a road traffic accident, loaded onto a flatbed at dusk"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-2xl font-bold">Recovery, whenever it happens</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-ink)]/75">
              Broken down, been in an accident, or just need something
              shifted — cars, vans, plant, even boats. One call, and we sort
              the rest.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CORE SERVICES — DOCKET STYLE ---------------- */}
      <section className="border-y border-[var(--color-ink)]/10 bg-[var(--color-paper-dim)]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Everything else, still handled properly.
              </h2>
              <p className="mt-4 text-[var(--color-ink)]/70">
                The regular workshop jobs, done in Newmills.
              </p>
            </div>

            <div className="md:col-span-8">
              {[
                {
                  name: "MOT preparation",
                  detail: "Pre-test checks and fixes so it passes first time.",
                },
                {
                  name: "Servicing",
                  detail: "Interim, full and manufacturer-schedule servicing.",
                },
                {
                  name: "Remapping",
                  detail: "ECU remaps for performance or economy.",
                },
                {
                  name: "Tyres",
                  detail: "Supplied and fitted, cars and light commercials.",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="docket-row flex flex-col justify-between gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="text-lg font-semibold">{service.name}</span>
                  <span className="text-[var(--color-ink)]/65 sm:text-right">
                    {service.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="bg-[var(--color-dusk)] text-[var(--color-paper)]">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            What people say after we&rsquo;ve been out.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <blockquote className="border-l-2 border-[var(--color-beacon)] pl-5 leading-relaxed text-[var(--color-steel-light)]">
              &ldquo;Sean kept the cab cool for us right through the hottest
              week of the year.&rdquo;
            </blockquote>
            <blockquote className="border-l-2 border-[var(--color-beacon)] pl-5 leading-relaxed text-[var(--color-steel-light)]">
              &ldquo;Didn&rsquo;t know anyone did air-con on tractors until we
              found these lads. Sorted in the yard, same day.&rdquo;
            </blockquote>
            <blockquote className="border-l-2 border-[var(--color-beacon)] pl-5 leading-relaxed text-[var(--color-steel-light)]">
              &ldquo;Recovered a JCB from a site nobody else wanted to touch.
              No messing about.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
