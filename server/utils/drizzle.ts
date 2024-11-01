import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from '../database/schema'

export { and, eq, or, sql } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  const { dbConnectionString } = useRuntimeConfig()
  return drizzle(dbConnectionString, { schema })
}

export type User = typeof schema.words.$inferSelect
