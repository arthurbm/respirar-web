import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import { CustomHeading, DashboardLayout } from "~/components";
import { useFormStore } from "~/stores/useFormStore";
import { BsClock } from "react-icons/bs";
import { BiWalk } from "react-icons/bi";
import { useRouter } from "next/router";

const Atividade: NextPage = () => {
  const { getFormData } = useFormStore();
  const router = useRouter();

  const { type } = router.query;

  const makeTitle = () => {
    if (type === "meditacao") {
      return "meditação";
    } else if (type === "exercicio") {
      return "exercício";
    } else if (type === "filme") {
      return "filme";
    } else if (type === "serie") {
      return "série";
    } else {
      return "atividade";
    }
  };

  const title = makeTitle();

  console.log(getFormData());

  return (
    <>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <DashboardLayout>
          <Flex
            flexDir={"column"}
            justify={"center"}
            h={"full"}
            gap={{ base: 6, md: 12 }}
            mx={{ base: 0, lg: "auto" }}
            maxW={{ base: "full", md: "container.md" }}
          >
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              {title}
            </CustomHeading>

            <CustomHeading
              color={"white.500"}
              fontSize={"2xl"}
              fontWeight={"bold"}
            >
              tempo para respirar
            </CustomHeading>

            <Flex
              align={"center"}
              justify={"flex-start"}
              p={4}
              borderWidth={2}
              borderColor={"orange.500"}
              borderRadius={"md"}
            >
              <Icon as={BsClock} w={6} h={6} color={"orange.500"} />
              <Text
                wordBreak={"break-word"}
                ml={4}
                color={"orange.500"}
                fontSize={"md"}
                fontWeight={600}
              >
                1h
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDir={"column"}
            justify={"center"}
            h={"full"}
            gap={{ base: 6, md: 12 }}
            mx={{ base: 0, lg: "auto" }}
            maxW={{ base: "full", md: "container.md" }}
          >
            <CustomHeading
              color={"white.500"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              mt={"10"}
            >
              sugestão
            </CustomHeading>

            <Flex
              flexDir={"column"}
              align={"center"}
              justify={"flex-start"}
              p={4}
              borderWidth={2}
              borderColor={"orange.500"}
              borderRadius={"md"}
            >
              <HStack alignSelf={"flex-start"}>
                <Icon as={BiWalk} w={6} h={6} color={"orange.500"} />
                <Text
                  wordBreak={"break-word"}
                  ml={4}
                  color={"orange.500"}
                  fontSize={"md"}
                  fontWeight={600}
                >
                  Corrida (45 min)
                </Text>
              </HStack>

              <Text
                wordBreak={"break-word"}
                color={"orange.500"}
                fontSize={"md"}
                fontWeight={400}
                mt={2}
              >
                Sente-se em uma posição confortável e feche os olhos.
                Concentre-se em sua respiração e conte cada inspiração e
                expiração até 10. Depois, comece de novo do número 1. Se sua
                mente se distrair, volte gentilmente para a contagem. Faça isso
                por 10 a 15 minutos.
              </Text>
            </Flex>
          </Flex>
        </DashboardLayout>
      </Box>
    </>
  );
};

export default Atividade;
