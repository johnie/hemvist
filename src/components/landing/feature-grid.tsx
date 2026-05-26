import {
  IconAlarmSmoke,
  IconBellRinging,
  IconCoin,
  IconFileSearch,
  IconRefresh,
  IconServerCog,
} from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: IconServerCog,
    title: "Registrar-agnostic",
    desc: "Pull from Porkbun, Namecheap, Cloudflare, Loopia, Gandi and friends. One ledger, every TLD, no plugin gymnastics.",
  },
  {
    icon: IconBellRinging,
    title: "Expiry alerts",
    desc: "Email and webhook nudges at 90 / 30 / 7 / 1 days out. Tunable per-domain so the side-project TLD doesn't page you.",
  },
  {
    icon: IconFileSearch,
    title: "WHOIS, indexed",
    desc: "Cached, diffed, searchable. See when nameservers drift or a transfer lock quietly unlatches.",
  },
  {
    icon: IconRefresh,
    title: "Auto-renew audit",
    desc: "Know exactly which domains will auto-renew, on which card, and which need a manual click. No more 11pm surprises.",
  },
  {
    icon: IconCoin,
    title: "Cost rollup",
    desc: "Annualised spend across all your registrars in your home currency. Catch the .io tax before accounting does.",
  },
  {
    icon: IconAlarmSmoke,
    title: "Drop watch",
    desc: "Lost a domain? Add it to the dropwatch — hemvist pings you the moment it's re-registrable.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-12" id="features">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="block-title font-medium text-[11px] text-muted-foreground uppercase tracking-[0.14em]">
          what it does
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border ring-1 ring-border md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <Card
            className="rounded-none bg-background ring-0"
            key={title}
            size="sm"
          >
            <CardHeader>
              <Icon className="mb-2 size-4 text-primary" />
              <CardTitle className="font-medium text-sm tracking-tight">
                {title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {desc}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
