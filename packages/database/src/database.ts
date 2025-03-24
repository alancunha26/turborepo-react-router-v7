import { drizzle } from 'drizzle-orm/better-sqlite3'

const databaseUrl = process?.env?.DATABASE_URL || ''
console.log('databaseUrl', databaseUrl)
export const db = drizzle(databaseUrl)
