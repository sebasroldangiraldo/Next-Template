import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import SessionAuthProvider from "@/context/session-auth-provider";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Next Assessment Template",
    description: "Sebastián Roldán Giraldo",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const locale = await getLocale();
    const messages = await getMessages();

    return (

        <html lang={locale}>

            <body className={raleway.className}>
                <NextIntlClientProvider messages={messages}>
                    <SessionAuthProvider>
                        <Navbar></Navbar>
                        {children}
                    </SessionAuthProvider>
                </NextIntlClientProvider>
            </body>

        </html>
    );
}