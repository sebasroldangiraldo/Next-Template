import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        _id: string;
        email: string;
        username: string;
        name: string;
        phone: string;
        access_token: string;
    }

    interface Session {
        user: User;
    }
}