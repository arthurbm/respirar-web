/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Flex, Icon, Text, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import ellipseBottomBright from "../assets/images/ellipse-bottom-bright.png";
import ellipseTopBright from "../assets/images/ellipse-top-bright.png";
import ellipseTopDark from "../assets/images/ellipse-top-dark.png";
import lineBottom from "../assets/images/line-bottom.png";
import lineTop from "../assets/images/line-top.png";
import Link from "next/link";
import { useState } from "react";
import useUserStore from "~/stores/useUserStore";
import { useRouter } from "next/router";
import { createUser } from "~/services/user";

function AbsoluteImages() {
  return (
    <>
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

const Register: NextPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const { login, protectPage } = useUserStore()

  void protectPage(false, router);

  const showToast = (title: string, status: "error" | "success") => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }

  const checkPasswords = () => {
    if (password !== confirmPassword) {
      showToast("As senhas devem ser iguais", "error")
      return false;
    }
    return true;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passed = checkPasswords();

    if (passed) {
      try {
        const user = await createUser({ name, email, password });

        if (user) {
          showToast("Conta criada com sucesso!", "success")
          await login({ email, password }, router);
        }
      } catch (error) {
        showToast(error?.message, "error")
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
              cadastro
            </CustomHeading>
          </Flex>

          <Box w={"100%"} maxW={"250px"} margin="20px 0">
            <form onSubmit={handleSubmit}>
              <Flex gap={5} flexDir={"column"} align={"center"}>
                <FormControl id="name">
                  <FormLabel color="#FFF4EA">
                    nome
                  </FormLabel>

                  <Input
                    type="name"
                    name="name"
                    placeholder="insira seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    bg="#E4C086"
                    color="#011C2F99"
                    border="1px solid #CF6E33"
                    borderRadius="8px"
                    px="11px"

                  />
                </FormControl>

                <FormControl id="email">
                  <FormLabel color="#FFF4EA">
                    email
                  </FormLabel>

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
                  <FormLabel color="#FFF4EA">
                    senha
                  </FormLabel>

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

                <FormControl id="confirm_password">
                  <FormLabel color="#FFF4EA">
                    confirmação de senha
                  </FormLabel>

                  <Input
                    type="password"
                    name="confirm_password"
                    placeholder="confirme sua senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    bg="#E4C086"
                    color="#011C2F99"
                    border="1px solid #CF6E33"
                    borderRadius="8px"
                    px="11px"
                  />
                </FormControl>

                <Flex flexDir={"column"} align={"center"} gap={6}>
                  <Button
                    color={"darkBlue.500"}
                    w={"28"}
                    size={"lg"}
                    colorScheme={"orange"}
                    boxShadow={"0px 0px 40px 0px #CF6E3366"}
                    type="submit"
                  >
                    Continuar
                  </Button>
                </Flex>
              </Flex>
            </form>
          </Box>

          <Flex flexDir={"column"} alignItems={"center"}>
            <Text color="#CF6E33" fontSize="20px" fontWeight="bold" textAlign="center">
              já tem uma conta?{" "}
            </Text>;

            <Link href="/login">
              <Text
                color="#CF6E33" fontSize="20px"
                fontWeight="bold"
                textDecoration="underline"
              >
                faça o login
              </Text>
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
      </Box >
      <AbsoluteImages />
    </>
  );
};

export default Register;
