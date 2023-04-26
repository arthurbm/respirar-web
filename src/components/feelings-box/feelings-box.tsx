import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomHeading } from "../custom-heading";
import { AiOutlineFrown, AiOutlineSmile, AiOutlineMeh } from "react-icons/ai";

export function FeelingsBox() {
  const feelingsOptions = [
    {
      icon: AiOutlineFrown,
      label: "triste",
      id: 1,
    },
    {
      icon: AiOutlineMeh,
      label: "neutro",
      id: 2,
    },
    {
      icon: AiOutlineSmile,
      label: "feliz",
      id: 3,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<number>();

  console.log(selectedOption)
  return (
    <Flex flexDir={"column"} gap={4} w={"full"}>
      <CustomHeading color={"white.500"} fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"}>
        como você está se sentindo?
      </CustomHeading>
      <HStack justify={"space-between"} align={"center"} w={"full"}>
        {feelingsOptions.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <Flex
              key={option.id}
              align={"center"}
              flexDir={"column"}
              gap={"1"}
              _hover={{ cursor: "pointer" }}
              onClick={() => setSelectedOption(option.id)}
            >
              <Icon
                as={option.icon}
                w={{ base: "8", md: "10" }}
                h={{ base: "8", md: "10" }}
                color={isSelected ? "orange.500" : "white.500"}
                transition={"color 0.2s ease-in-out"}
              />
              <Text color={"white.400"} fontSize={"sm"}>
                {option.label}
              </Text>
            </Flex>
          );
        })}
      </HStack>
    </Flex>
  );
}
