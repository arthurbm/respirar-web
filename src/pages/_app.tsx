import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Barlow } from "next/font/google";
import { theme } from "~/styles/theme";

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <main className={barlow.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default MyApp;
