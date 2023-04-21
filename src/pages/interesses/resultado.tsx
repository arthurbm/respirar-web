import { Box, Button, Flex } from "@chakra-ui/react";
import { type NextPage } from "next";
import Link from "next/link";
import { AbsoluteImages, CustomHeading } from "~/components";
import { IconCheck } from "~/components/icons/icon-check";
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
          gap={6}
        >
            <IconCheck w={"20"} h={"20"} />
          <Flex flexDir={"column"} align={"center"} textAlign={"center"} gap={"10"}>
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              tudo certo
            </CustomHeading>

            <Link href={"/dashboard"}>
              <Button
                color={"darkBlue.500"}
                w={"28"}
                size={"lg"}
                colorScheme={"orange"}
                boxShadow={"0px 0px 40px 0px #CF6E3366"}
              >
                Início
              </Button>
            </Link>
          </Flex>

          <IconLogo
            position={"absolute"}
            bottom={"10"}
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
