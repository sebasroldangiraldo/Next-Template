import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

    providers: [

        CredentialsProvider({

            name: 'credentials',

            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },

            async authorize(credentials) {

                try {
                    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: credentials!.username, password: credentials!.password })
                    });

                    const data = await response.json();
                    console.log('esta es la respuesta', data);

                    if (response.ok) {
                        const user = { ...data.user, access_token: data.access_token };
                        console.log('este es el user', user);
                        return user;
                    }
                    return null;

                } catch (error) {
                    console.log(error);
                }
            }
        })
    ],

    callbacks: {

        jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },

        session({ session, token }) {
            session.user = token.user as User;
            return session;
        }
    },

    pages: {
        signIn: '/sign-in',
    }
});

export { handler as GET, handler as POST };