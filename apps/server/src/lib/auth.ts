import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { scryptSync, randomBytes } from "node:crypto";
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
      password: {
        hash: async (password) => {
          // use scrypt from node:crypto
          const salt = randomBytes(16).toString("hex");
          const hash = scryptSync(password, salt, 64).toString("hex");
          return `${salt}:${hash}`;
        },
        verify: async ({ hash, password }) => {
          const [salt, key] = hash.split(":");
          const keyBuffer = Buffer.from(key, "hex");
          const hashBuffer = scryptSync(password, salt, 64);
          return keyBuffer.equals(hashBuffer);
        },
      },
    },
    trustedOrigins: [
      env.CORS_ORIGIN ? env.CORS_ORIGIN : "http://localhost:3001",
      "http://localhost:8081",
      "exp://192.168.1.21:8081",
    ],
  });
};
