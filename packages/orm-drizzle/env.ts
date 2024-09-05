import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const envDrizzle = createEnv({
  server: {
		DATABASE_URL: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
