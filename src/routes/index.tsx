import { createFileRoute } from "@tanstack/react-router";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Hero } from "@/components/landing/hero";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-360 px-8 pt-9 pb-20">
        <Hero />
        <Separator />
        <FeatureGrid />
        <SiteFooter />
      </main>
    </>
  );
}
