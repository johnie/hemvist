import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stats = [
  {
    k: "registrars",
    v: "5+",
    unit: "supported",
    note: "Porkbun · Namecheap · Cloudflare · Gandi +",
  },
  {
    k: "expiry alerts",
    v: "≤ 30d",
    unit: "lead time",
    note: "before the registrar pulls the rug",
  },
  {
    k: "whois",
    v: "1",
    unit: "place",
    note: "cached, diff'd, never re-tabbed",
  },
  {
    k: "lock-in",
    v: "0",
    unit: "%",
    note: "read-only ledger · own your data",
  },
];

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-end gap-12 pb-9 md:grid-cols-[1.4fr_1fr]">
      <div>
        <h1 className="font-light text-5xl leading-[0.95] tracking-tight md:text-[64px]">
          every domain
          <br />
          has a <em className="font-normal text-primary italic">hemvist</em>
          <span className="text-muted-foreground/50">.</span>
        </h1>
        <p className="mt-5 max-w-[52ch] text-muted-foreground text-sm leading-relaxed">
          <i>Hemvist</i>
          <span className="text-muted-foreground/70"> · sv.</span> a dwelling,
          an abode, the place where something resides. A registrar-agnostic
          ledger for the domains you actually own — watch expiries before they
          bite, audit WHOIS in one place, and stop digging through fourteen
          control panels at 11pm.
        </p>

        <form
          className="mt-7 flex max-w-md items-center gap-2"
          id="waitlist"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex-1">
            <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 font-medium text-primary">
              $
            </span>
            <Input
              aria-label="email address"
              className="h-9 pl-6 text-sm"
              placeholder="you@your-favorite-domain.com"
              type="email"
            />
          </div>
          <Button className="h-9 px-3 text-sm" size="lg" type="submit">
            join waitlist
            <IconArrowRight className="size-3.5" />
          </Button>
        </form>
        <p className="mt-2.5 text-[11px] text-muted-foreground/80">
          early access · no spam · unsubscribe with one{" "}
          <span className="border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-[0.95em] text-foreground">
            DELETE
          </span>{" "}
          request
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border ring-1 ring-border">
        {stats.map((s) => (
          <div className="bg-background p-4" key={s.k}>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.12em]">
              {s.k}
            </div>
            <div className="mt-1.5 font-normal text-[26px] tracking-tight">
              {s.v}
              <span className="ml-1.5 text-muted-foreground text-xs">
                {s.unit}
              </span>
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground/90">
              {s.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
