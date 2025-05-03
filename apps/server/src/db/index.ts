import { drizzle } from "drizzle-orm/libsql";
import type { Bindings } from "../../types/bindings";

let db: ReturnType<typeof drizzle>;

export function getDB(env: Bindings) {
	if (!db) {
		// Ensure environment variables are set from Bindings
		const databaseUrl = env.DATABASE_URL;
		const authToken = env.DATABASE_AUTH_TOKEN;

		if (!databaseUrl) {
			throw new Error("DATABASE_URL binding is not available in env.");
		}

		db = drizzle({
			connection: {
				url: databaseUrl,
				authToken: authToken,
			},
		});
	}
	return db;
}
