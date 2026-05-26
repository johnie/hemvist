import { z } from "zod";

export const envSchema = z.object({
  DB: z.string().optional(),
});

export const env = envSchema.parse(process.env);

export const clientEnvSchema = z.object({
  VITE_BUILD_TIME: z.string(),
  VITE_BUILD_GIT_SHA: z.string(),
  VITE_BUILD_GIT_SHA_URL: z.string().optional(),
  VITE_BUILD_VERSION: z.string(),
});

export const clientEnv = clientEnvSchema.parse(import.meta.env);
