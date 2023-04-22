import { type NextPage } from "next";
import Head from "next/head";
import { googleLogin } from '../services/auth';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AbsoluteImages } from "~/components";

const Callback: NextPage = () => {
  const router = useRouter();
  const { token, g_token } = router.query;

  useEffect(() => {
    if (token && typeof token === 'string') {
      if (g_token && typeof g_token === 'string') {
        void googleLogin(router, token, g_token);
      }else {
        void googleLogin(router, token);
      }
    }
  }, [token, g_token, router])


  return (
    <>
      <Head>
        <title>Respirar</title>
        <meta name="description" content="Programe atividades prazerosas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AbsoluteImages />
    </>
  );
};

export default Callback;
