import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import ellipseBottomBright from "../assets/images/ellipse-bottom-bright.png";
import ellipseBottomDark from "../assets/images/ellipse-bottom-dark.png";
import ellipseTopBright from "../assets/images/ellipse-top-bright.png";
import ellipseTopDark from "../assets/images/ellipse-top-dark.png";
import lineBottom from "../assets/images/line-bottom.png";
import lineTop from "../assets/images/line-top.png";
import Link from "next/link";
import useUserStore from "~/stores/useUserStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AbsoluteImages() {
  return (
    <>
      <Image
        src={ellipseBottomDark}
        alt={"Ellipse bottom dark"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseBottomBright}
        alt={"Ellipse bottom bright"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseTopDark}
        alt={"Ellipse top dark"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={ellipseTopBright}
        alt={"Ellipse top bright"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={lineBottom}
        alt={"Line bottom"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={lineTop}
        alt={"Line top"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </>
  );
}

const Home: NextPage = () => {
  const router = useRouter();
  const { protectPage } = useUserStore();

  useEffect(() => {
    void (async () => {
      await protectPage(false, router);
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Respirar</title>
        <meta name="description" content="Programe atividades prazerosas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <Flex
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          mx={"16"}
          h={"full"}
          gap={8}
        >
          <Flex flexDir={"column"} align={"center"}>
            <Text color={"white.500"} fontSize={"2xl"} fontWeight={400}>
              você já parou para
            </Text>
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              respirar
            </CustomHeading>
            <Text color={"white.500"} fontSize={"2xl"} fontWeight={400}>
              hoje?
            </Text>
          </Flex>

          <Text color={"white.500"} fontSize={"md"}>
            temos a solução perfeita para que você separe um tempo do seu dia
            para realizar atividades que você gosta!
          </Text>

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Link href="/login">
              <Button
                color={"darkBlue.500"}
                w={"28"}
                size={"lg"}
                colorScheme={"orange"}
                boxShadow={"0px 0px 40px 0px #CF6E3366"}
              >
                Login
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button
                w={"28"}
                size={"lg"}
                borderWidth={2}
                colorScheme={"orange"}
                variant={"outline"}
              // boxShadow={"0px 0px 40px 0px #CF6E3399"}
              >
                Cadastro
              </Button>
            </Link>
          </Flex>

          <Icon
            position={"absolute"}
            bottom={"10"}
            as={IconLogo}
            w={29}
            h={37}
          />
        </Flex>
      </Box>
      <AbsoluteImages />
    </>
  );
};

export default Home;
