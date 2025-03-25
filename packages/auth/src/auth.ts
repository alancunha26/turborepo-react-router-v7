import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db, schema } from '@repo/database';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite', // or "pg" or "mysql"
    schema: { ...schema },
    usePlural: true,
  }),
});
