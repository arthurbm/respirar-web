import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import { AbsoluteImages, CustomHeading, RadioBallGroup } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import Link from "next/link";
import modernFamily from "../assets/images/modern-family.png";
import friends from "../assets/images/friends.png";
import howIMetYourMother from "../assets/images/himym.png";
import theOffice from "../assets/images/the-office.png";
import { useState } from "react";

const MyInterestsSeries: NextPage = () => {
  const options = [
    {
      title: "Friends",
      image: friends,
    },
    {
      title: "How I met your mother",
      image: howIMetYourMother,
    },
    {
      title: "Modern Family",
      image: modernFamily,
    },
    {
      title: "The Office",
      image: theOffice,
    },
  ];

  const [value, setValue] = useState("");

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
              meus interesses
            </CustomHeading>
          </Flex>

          <Text
            color={"#FFF4EA"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            você tem uma série de conforto?
          </Text>

          <RadioBallGroup
            options={options}
            name="series"
            value={value}
            onChange={(value) => setValue(value)}
          />

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Link href={"/resultado"}>
              <Button
                color={"darkBlue.500"}
                w={"28"}
                size={"lg"}
                colorScheme={"orange"}
                boxShadow={"0px 0px 40px 0px #CF6E3366"}
              >
                Continuar
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

export default MyInterestsSeries;
