import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Respirar</title>
        <meta name="description" content="Programe atividades prazerosas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <VStack align={"center"} justify={"center"} mx={"16"} h={"full"} gap={8}>
          <VStack>
            <Text color={"white.500"} fontSize={"2xl"} fontWeight={400}>
              você já parou para
            </Text>
            <Text color={"white.500"} fontSize={"2xl"} fontWeight={400}>
              respirar
            </Text>
            <Text color={"white.500"} fontSize={"2xl"} fontWeight={400}>
              hoje?
            </Text>
          </VStack>

          <Text color={"white.500"} fontSize={"md"}>
            temos a solução perfeita para que você separe um tempo do seu dia
            para realizar atividades que você gosta!
          </Text>

          <VStack gap={6}>
            <Button color={"darkBlue.500"} w={"28"} size={"lg"} colorScheme={"orange"}>Login</Button>
            <Button w={"28"} size={"lg"} borderWidth={2} colorScheme={"orange"} variant={"outline"}>Cadastro</Button>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
