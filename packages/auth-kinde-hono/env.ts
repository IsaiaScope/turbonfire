import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const envKinde = createEnv({
	server: {
		KINDE_DOMAIN: z.string().url().min(1),
		KINDE_CLIENT_ID: z.string().min(1),
		KINDE_CLIENT_SECRET: z.string().min(1),
		KINDE_REDIRECT_URI: z.string().url().min(1),
		KINDE_LOGOUT_REDIRECT_URI: z.string().url().min(1),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
