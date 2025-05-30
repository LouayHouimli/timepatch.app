import "dotenv/config";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { Bindings } from "../types/bindings";
import { createAuth } from "./lib/auth";
import { createContext } from "./lib/context";
import { appRouter } from "./routers/index";
import type { MiddlewareHandler } from "hono";

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());
app.use("/*", (c, next) => {
  return cors({
    origin: [
      c.env.CORS_ORIGIN ? c.env.CORS_ORIGIN : "https://louli.tech",

      "http://localhost:3000",
      "http://localhost:3001",
      "exp://192.168.1.21:8081",
      "http://localhost:8081",
    ],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "x-api-key"],
    credentials: true,
  })(c, next);
});

app.on(["POST", "GET"], "/api/auth/**", (c) => {
  const auth = createAuth(c.env);
  return auth.handler(c.req.raw);
});

app.use(
  "/trpc/*",

  trpcServer({
    router: appRouter,
    createContext: (_opts, context) => {
      return createContext({ context });
    },
  })
);

app.get("/", (c) => {
  return c.text("TimePatch API is running");
});

export default app;
