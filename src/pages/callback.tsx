import { type NextPage } from "next";
import Head from "next/head";
import { googleLogin } from '../services/auth';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AbsoluteImages } from "~/components";

const Callback: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token && typeof token === 'string') {
      void googleLogin(token, router);
    }
  }, [token, router])


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
