import { DefaultSession } from "next-auth";

declare module "next-auth" {
	interface User {
		id: string;
		hasAccess: boolean;
		email: string;
	}

	interface Session {
		user: User & DefaultSession["user"];
	}
}

declare module "@auth/core/jwt" {
	interface JWT {
		userId: string;
		email: string;
		hasAccess: boolean;
	}
}
