import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { AbsoluteImages, CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";

const Home: NextPage = () => {
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
            <Button
              color={"darkBlue.500"}
              w={"28"}
              size={"lg"}
              colorScheme={"orange"}
              boxShadow={"0px 0px 40px 0px #CF6E3366"}
            >
              Login
            </Button>
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
