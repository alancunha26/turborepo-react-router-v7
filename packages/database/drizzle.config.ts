import { defineConfig } from 'drizzle-kit'

console.log('DB', process.env.DATABASE_URL)

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/schema.ts',
  out: './drizzle',
  dbCredentials: {
    // url: ":memory:", // inmemory database
    url: process?.env?.DATABASE_URL || '', // file: prefix is required by libsql
  },
})
