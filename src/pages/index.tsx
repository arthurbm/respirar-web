import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconLogo } from "~/components/icons/icon-logo";
import useUserStore from "~/stores/useUserStore";
import { AbsoluteImages, CustomHeading } from "~/components";

const Onboarding: NextPage = () => {
  const router = useRouter();
  const { protectPage } = useUserStore();

  void protectPage(false, router);

  return (
    <>
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

          <Text textAlign={"center"} color={"white.500"} fontSize={"md"}>
            separe um tempo do seu dia para realizar atividades que você gosta!
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
                Vamos lá
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

          <IconLogo position={"absolute"} bottom={"10"} w={29} h={37} />
        </Flex>
      </Box>
      <AbsoluteImages />
    </>
  );
};

export default Onboarding;
