export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-paper)]/10 bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="stamp-mark" />
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Devine Auto Repairs
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-steel-light)]">
            One stop shop for cars, vans, plant and everything in between.
            Newmills, Co. Tyrone, and on the road when you need us there.
          </p>
        </div>

        <div className="text-sm text-[var(--color-steel-light)]">
          <p className="font-semibold text-[var(--color-paper)]">Get in touch</p>
          <p className="mt-3">23 Glencon Rd, Newmills, Dungannon, BT71 4HQ</p>
          <p className="mt-1">
            <a href="tel:07871955395" className="hover:text-[var(--color-paper)]">
              07871 955395
            </a>
          </p>
        </div>

        <div className="text-sm text-[var(--color-steel-light)]">
          <p className="font-semibold text-[var(--color-paper)]">On call</p>
          <p className="mt-3">Recovery: 24 hours, 7 days</p>
          <p className="mt-1">Workshop &amp; mobile A/C: by appointment</p>
        </div>
      </div>
      <div className="border-t border-[var(--color-paper)]/10 px-5 py-5 text-center text-xs text-[var(--color-steel-light)] md:px-10">
        © {new Date().getFullYear()} Devine Auto Repairs.
      </div>
    </footer>
  );
}
