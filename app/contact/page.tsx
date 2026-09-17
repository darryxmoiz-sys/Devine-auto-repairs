import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Devine Auto Repairs",
  description: "23 Glencon Rd, Newmills, Dungannon. 07871 955395.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
      <h1 className="max-w-2xl text-5xl font-bold leading-[0.98] md:text-6xl">
        Get in touch.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="docket-row py-5">
            <p className="text-sm text-[var(--color-ink)]/60">Address</p>
            <p className="mt-1 text-lg">23 Glencon Rd, Newmills, Dungannon, BT71 4HQ</p>
          </div>
          <div className="docket-row py-5">
            <p className="text-sm text-[var(--color-ink)]/60">Phone</p>
            <p className="mt-1 text-lg">
              <a href="tel:07871955395" className="hover:text-[var(--color-signal)]">
                07871 955395
              </a>
            </p>
          </div>
          <div className="docket-row py-5">
            <p className="text-sm text-[var(--color-ink)]/60">Recovery</p>
            <p className="mt-1 text-lg">Available 24 hours, 7 days a week</p>
          </div>
          <div className="py-5">
            <p className="text-sm text-[var(--color-ink)]/60">Workshop &amp; mobile A/C</p>
            <p className="mt-1 text-lg">By appointment — Newmills or on-site</p>
          </div>

          <div className="mt-8 relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src="/jobs/6-boat-storage.jpg"
              alt="The Devine Auto Repairs workshop in Newmills, with a boat in for winter storage"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-sm border border-[var(--color-ink)]/15 bg-[var(--color-paper-dim)] p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
