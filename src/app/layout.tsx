import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
    title: "Next Assesment Template",
    description: "Sebastián Roldán Giraldo",
};

export default async function RootLayout({ children, } : Readonly<{ children : React.ReactNode; }>) {

    const locale = await getLocale();
    const messages = await getMessages();

    return (

        <html lang={locale}>

            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>

        </html>
    );
}