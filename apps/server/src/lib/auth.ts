import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { getDB } from "../db";
import * as schema from "../db/schema/auth";

import type { Bindings } from "../../types/bindings";

export const createAuth = (env: Bindings) => {
  const db = getDB(env); // create db per request
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema: schema,
    }),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:8787",
      env.CORS_ORIGIN ? `https://${env.CORS_ORIGIN}` : "https://louli.tech",
    ],
  });
};
