export function SiteFooter() {
  return (
    <footer className="mt-16 flex flex-col gap-3 border-border border-t pt-6 text-[11px] text-muted-foreground md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="text-emerald-500">●</span>
        <span>all systems normal</span>
        <span className="text-muted-foreground/40">·</span>
        <span>hemvist v0.0.1</span>
        <span className="text-muted-foreground/40">·</span>
        <a
          className="transition-colors hover:text-foreground"
          href="https://github.com/johnie/hemvist"
        >
          github
        </a>
        <a className="transition-colors hover:text-foreground" href="#waitlist">
          changelog
        </a>
      </div>
      <div className="text-muted-foreground/80">
        build a3f91d2 · 2026.05.26 · made in sweden{" "}
        <svg
          className="inline-block size-4 align-middle"
          fill="none"
          viewBox="0 0 36 36"
        >
          <title>swedish flag</title>
          <path
            d="M15.5 31H32c2.209 0 4-1.791 4-4.5v-6H15.5V31zM32 5H15.5v10.5H36V9a4 4 0 0 0-4-4zM10.5 5H4a4 4 0 0 0-4 3.997V15.5h10.5V5zM0 20.5v6.004C.002 29.211 1.792 31 4 31h6.5V20.5H0z"
            fill="#006AA7"
          />
          <path
            d="M15.5 5h-5v10.5H0v5h10.5V31h5V20.5H36v-5H15.5z"
            fill="#FECC00"
          />
        </svg>
      </div>
    </footer>
  );
}
