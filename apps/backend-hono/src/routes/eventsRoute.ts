import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { envHono } from '../env';

// const COMMENT = {
// 	id: 1,
// 	text: 'Comment 1',
// 	date: '2022-01-01',
// 	author: 'Author 1',
// 	likes: 1,
// 	imgs: ['img1.jpg', 'img2.jpg'],
// };

// const EVENTS = [
// 	{
// 		id: 1,
// 		name: 'Event 1',
// 		description: 'This is event 1',
// 		date: '2022-01-01',
// 		author: 'Author 1',
// 		imgs: ['img1.jpg', 'img2.jpg'],
// 		comments: [COMMENT],
// 		commentsNumber: 2,
// 	},
// ];

export const eventSchema = z.object({
	id: z.number(),
	name: z.string(),
	// description: z.string(),
	// date: z.string(),
	// author: z.string(),
	// imgs: z.array(z.string()).optional(),
	// comments: z.array(
	// 	z.object({
	// 		id: z.number(),
	// 		text: z.string(),
	// 		date: z.string(),
	// 		author: z.string(),
	// 		likes: z.number(),
	// 		imgs: z.array(z.string()),
	// 	})
	// ),
	// commentsNumber: z.number(),
});

export const createEventSchema = eventSchema.omit({ id: true });

export type Event = z.infer<typeof eventSchema>;

export const eventsRoute = new Hono()
	.get('/', async c => {
		return c.json({ message: envHono.KINDE_DOMAIN });
	})
	.post('/data', zValidator('json', createEventSchema), c => {
		const data = c.req.valid('json');
		return c.json({ data });
	})
	// .get('/:id{[0-9]+}', c => {
	// 	const id = c.req.param('id');
	// 	const event = EVENTS.find(e => e.id === +id);
	// 	if (!event) {
	// 		return c.notFound();
	// 	}
	// 	return c.json({ event });
	// });
