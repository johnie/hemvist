export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-360 items-center justify-between px-8 py-3.5">
        <div className="flex items-center gap-3.5 text-sm">
          <span className="inline-block size-2 animate-pulse bg-primary" />
          <span className="font-medium tracking-tight">hemvist</span>
          <span className="font-light text-muted-foreground/70">~/</span>
        </div>
      </div>
    </header>
  );
}
