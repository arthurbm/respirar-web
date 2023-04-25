import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { CustomHeading } from "../custom-heading";
import { AiOutlineFrown, AiOutlineSmile, AiOutlineMeh } from "react-icons/ai";

export function FeelingsBox() {
  const feelingsOptions = [
    {
      icon: AiOutlineFrown,
      label: "triste",
      id: uuidv4(),
    },
    {
      icon: AiOutlineMeh,
      label: "neutro",
      id: uuidv4(),
    },
    {
      icon: AiOutlineSmile,
      label: "feliz",
      id: uuidv4(),
    },
  ];

  return (
    <Flex flexDir={"column"} gap={4} w={"full"}>
      <CustomHeading color={"white.500"} fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"}>
        como você está se sentindo?
      </CustomHeading>
      <HStack justify={"space-between"} align={"center"} w={"full"}>
        {feelingsOptions.map((option) => (
          <Flex align={"center"} flexDir={"column"} gap={"1"} key={option.id}>
            <Icon
              as={option.icon}
              w={{ base: "8", md: "10" }}
              h={{ base: "8", md: "10" }}
              color={"white.500"}
              transition={"color 0.2s ease-in-out"}
              _hover={{ color: "orange.500" }}
            />
            <Text color={"white.400"} fontSize={"sm"}>
              {option.label}
            </Text>
          </Flex>
        ))}
      </HStack>
    </Flex>
  );
}
