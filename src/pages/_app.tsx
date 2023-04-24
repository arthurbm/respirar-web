import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import { theme } from "~/styles/theme";
import useUserStore from "~/stores/useUserStore";
import { useEffect } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { isLoggedIn } = useUserStore();

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Head>
          <title>Respirar</title>
          <meta name="description" content="Programe atividades prazerosas" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={roboto.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default MyApp;
