import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const waitlist = sqliteTable("waitlist", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  subscribed: integer("subscribed", { mode: "boolean" })
    .notNull()
    .default(true),
  registeredAt: integer("registered_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  unsubscribedAt: integer("unsubscribed_at", { mode: "timestamp" }),
});

export type Waitlist = typeof waitlist.$inferSelect;
export type NewWaitlist = typeof waitlist.$inferInsert;
