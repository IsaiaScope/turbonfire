import { date, index, numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const weightsTable = pgTable(
	'weights',
	{
		id: serial('id').primaryKey(),
		userId: text('user_id').notNull(),
		date: date('creation_time').notNull(),
		mass: numeric('mass', { precision: 5, scale: 2 }).notNull(),
	},
	({ userId }) => {
		return {
			userIdIndex: index('name_idx').on(userId),
		};
	}
);
