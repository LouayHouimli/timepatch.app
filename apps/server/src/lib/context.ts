import type { Context as HonoContext } from "hono";
import { createAuth } from "./auth";
import type { Bindings } from "../../types/bindings";

export type CreateContextOptions = {
  context: HonoContext<{ Bindings: Bindings }>;
};

export async function createContext({ context }: CreateContextOptions) {
  const auth = createAuth(context.env);
  const session = await auth.api.getSession({
    headers: context.req.raw.headers,
  });

  return {
    session,
    req: context.req,
    env: context.env,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
