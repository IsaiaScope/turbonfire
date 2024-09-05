import 'dotenv/config';
import {
	createKindeServerClient,
	GrantType,
	SessionManager,
} from '@kinde-oss/kinde-typescript-sdk';
import { envKinde } from './env';
import { type Context } from 'hono';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';

export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
	authDomain: envKinde.KINDE_DOMAIN,
	clientId: envKinde.KINDE_CLIENT_ID,
	clientSecret: envKinde.KINDE_CLIENT_SECRET,
	redirectURL: envKinde.KINDE_REDIRECT_URI,
	logoutRedirectURL: envKinde.KINDE_LOGOUT_REDIRECT_URI,
});

// Client for client credentials flow
export const kindeApiClient = createKindeServerClient(GrantType.CLIENT_CREDENTIALS, {
	authDomain: envKinde.KINDE_DOMAIN,
	clientId: envKinde.KINDE_CLIENT_ID,
	clientSecret: envKinde.KINDE_CLIENT_SECRET,
	logoutRedirectURL: envKinde.KINDE_LOGOUT_REDIRECT_URI,
});

export const sessionManager = (c: Context): SessionManager => ({
	async getSessionItem(key: string) {
		const result = getCookie(c, key);
		return result;
	},
	async setSessionItem(key: string, value: unknown) {
		const cookieOptions = {
			httpOnly: true,
			// to have SSL connection
			secure: true,
			// Cross-Site Request Forgery (CSRF)
			sameSite: 'Lax',
		} as const;
		if (typeof value === 'string') {
			setCookie(c, key, value, cookieOptions);
		} else {
			setCookie(c, key, JSON.stringify(value), cookieOptions);
		}
	},
	async removeSessionItem(key: string) {
		deleteCookie(c, key);
	},
	async destroySession() {
		['id_token', 'access_token', 'refresh_token'].forEach(key => {
			deleteCookie(c, key);
		});
	},
});
