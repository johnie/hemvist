import { drizzle } from "drizzle-orm/d1";
import { waitlist } from "./schema";

export function getDb(db: D1Database) {
  return drizzle(db, { schema: { waitlist } });
}
