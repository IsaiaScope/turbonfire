import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { eventsRoute } from './routes/eventsRoute';
import { serveStatic } from '@hono/node-server/serve-static';

const app = new Hono()
const port = 3000

app.use("*", logger())

const apiRoute = app.basePath('/api').route('/events', eventsRoute)
// .route('ciao', ()=> {})

app.use('*', serveStatic({ root: './dist' }))
// Serve index.html for all routes
app.use('*', serveStatic({ path: './dist/index.html' }))


serve({
  fetch: app.fetch,
  port  
})

export type ApiRoute = typeof apiRoute

