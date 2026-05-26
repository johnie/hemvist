import { env } from "cloudflare:workers";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getDb } from "@/db/client";
import { waitlist } from "@/db/schema";

export const joinInput = z.object({
  email: z.email().trim().toLowerCase().max(254),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => joinInput.parse(data))
  .handler(async ({ data }) => {
    const db = getDb(env.DB);
    try {
      await db.insert(waitlist).values({ email: data.email });
      return { ok: true as const };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (message.includes("UNIQUE")) {
        console.info("[waitlist] duplicate signup", { email: data.email });
        return { ok: true as const };
      }
      console.error("[waitlist] signup failed", {
        email: data.email,
        error: message,
      });
      return { ok: true as const };
    }
  });
