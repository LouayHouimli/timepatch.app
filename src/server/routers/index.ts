import { publicProcedure, router } from "../lib/trpc";
import { guestbookRouter } from "./guestbook/guestbook";
import { userRouter } from "./user/user";

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return "OK";
	}),
	helloFrom: publicProcedure.query(() => {
		return "Hello from TimePatch Api";
	}),
	jsonTest: publicProcedure.query(() => {
		return {
			message: "Hello, World!",
			data: {
				name: "John Doe",
				age: 30,
				email: "john.doe@timepatch.app",
			},
		};
	}),
	guestbook: guestbookRouter,
	user: userRouter,
});
export type AppRouter = typeof appRouter;
