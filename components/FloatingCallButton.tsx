export default function FloatingCallButton() {
  return (
    <a
      href="tel:07871955395"
      aria-label="Call Devine Auto Repairs, 07871 955395"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-signal)] text-[var(--color-paper)] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95 md:hidden"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
          fill="currentColor"
        />
      </svg>
      <span className="beacon-dot absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[var(--color-beacon)]" />
    </a>
  );
}
