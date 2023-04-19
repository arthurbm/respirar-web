import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import { AbsoluteImages, CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import { useFormStore } from "~/stores/useFormStore";

const Result: NextPage = () => {
  const { getFormData } = useFormStore();

  console.log(getFormData());

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
          <Flex flexDir={"column"} align={"center"} textAlign={"center"}>
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              resultado
            </CustomHeading>
          </Flex>

          <Text
            color={"#FFF4EA"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            assista o episodio 5 da temporada 2 de friends
          </Text>

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

export default Result;
