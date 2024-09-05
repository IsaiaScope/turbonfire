import 'dotenv/config';
import { envHono } from './env.js';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { eventsRoute } from './routes/eventsRoute.js';
import { kindeRoute } from '@packages/auth-kinde-hono/route';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono();

app.use('*', logger());

const apiRoute = app
	.basePath('/api')
	.route('/events', eventsRoute)
	.route('/kinde', kindeRoute);
// .route('ciao', ()=> {})

app.use('*', serveStatic({ root: './build-frontend' }));
// Serve index.html for all routes
app.use('*', serveStatic({ path: './build-frontend/index.html' }));

serve({
	fetch: app.fetch,
	port: +envHono.PORT,
});

export type ApiRoute = typeof apiRoute;
