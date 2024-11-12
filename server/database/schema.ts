import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const words = pgTable('words', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  letters: text('letters').notNull(),
  createdAt: timestamp().defaultNow().notNull(),
})
