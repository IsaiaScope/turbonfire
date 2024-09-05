import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const envKinde = createEnv({
  server: {
		KINDE_DOMAIN: z.string(),
		KINDE_CLIENT_ID: z.string(),
		KINDE_CLIENT_SECRET: z.string(),
		KINDE_REDIRECT_URI: z.string(),
		KINDE_LOGOUT_REDIRECT_URI: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
