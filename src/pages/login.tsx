/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Center,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { AbsoluteImages, CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import useUserStore from "~/stores/useUserStore";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import httpClient from "~/services/http";

const Login: NextPage = () => {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, protectPage } = useUserStore();

  void protectPage(false, router);

  const [googleUrl, setGoogleUrl] = useState("");

  useEffect(() => {
    const apiUrl = httpClient.defaults.baseURL || "http://localhost:3001/";
    const googleUrl =
      apiUrl + "auth/google?redirectUrl=" + window.location.origin;
    setGoogleUrl(googleUrl);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({ email, password }, router);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

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
          <Flex flexDir={"column"} align={"center"} textAlign={"center"}>
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              login
            </CustomHeading>
          </Flex>

          <Box w={"100%"} maxW={"250px"} margin="20px 0">
            <form onSubmit={handleSubmit}>
              <Flex gap={5} flexDir={"column"} align={"center"}>
                <FormControl id="email">
                  <FormLabel color="#FFF4EA">email</FormLabel>

                  <Input
                    type="email"
                    name="email"
                    placeholder="insira seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    bg="#E4C086"
                    color="#011C2F99"
                    border="1px solid #CF6E33"
                    borderRadius="8px"
                    px="11px"
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel color="#FFF4EA">senha</FormLabel>

                  <Input
                    type="password"
                    name="password"
                    placeholder="insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    bg="#E4C086"
                    color="#011C2F99"
                    border="1px solid #CF6E33"
                    borderRadius="8px"
                    px="11px"
                  />
                </FormControl>

                <Flex flexDir={"column"} align={"center"} gap={2}>
                  <Button
                    color={"darkBlue.500"}
                    w={"28"}
                    size={"lg"}
                    colorScheme={"orange"}
                    boxShadow={"0px 0px 40px 0px #CF6E3366"}
                    type="submit"
                  >
                    Login
                  </Button>

                  <Text
                    color="#CF6E33"
                    fontSize="20px"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    ou
                  </Text>

                  <Link href={googleUrl}>
                    <Button
                      w={"full"}
                      variant={"outline"}
                      textColor={"white.500"}
                      leftIcon={<FcGoogle />}
                      _hover={{
                        textColor: "darkBlue.500",
                        bgColor: "white.500",
                      }}
                    >
                      <Center>
                        <Text>Entrar com o Google</Text>
                      </Center>
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </form>
          </Box>

          <Flex flexDir={"column"} alignItems={"center"}>
            <Text
              color="#CF6E33"
              fontSize="20px"
              fontWeight="bold"
              textAlign="center"
            >
              não tem uma conta?{" "}
            </Text>
            ;
            <Link href="/cadastro">
              <Text
                color="#CF6E33"
                fontSize="20px"
                fontWeight="bold"
                textDecoration="underline"
              >
                cadastre-se
              </Text>
            </Link>
          </Flex>

          <IconLogo position={"absolute"} bottom={"10"} w={29} h={37} />
        </Flex>
      </Box>
      <AbsoluteImages />
    </>
  );
};

export default Login;
