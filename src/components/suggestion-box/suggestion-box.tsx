import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CustomHeading } from "../custom-heading";
import { v4 } from "uuid";
import { IconCheckOrangeBall } from "../icons/icon-check-orange-ball";
import { IconDotsHorizontalRounded } from "../icons/icon-dots-horizontal-rounded";
import { BiMoviePlay, BiWalk, BiWind } from "react-icons/bi";

type ActivityBoxProps = {
  label: string;
  name: "movie" | "exercise" | "meditation";
  time: string;
  checked: boolean;
};

function ActivityBox({ label, time, checked, name }: ActivityBoxProps) {
  return (
    <Flex w="full" justify={"space-between"} align={"center"}>
      <HStack>
        <Flex
          w={"8"}
          h={"8"}
          opacity={0.6}
          bgColor={"orange.500"}
          borderRadius={"full"}
          justify={"center"}
          align={"center"}
        >
          {name === "movie" && <BiMoviePlay color={"#E4C086"} size={"20"} />}
          {name === "exercise" && <BiWalk color={"#E4C086"} size={"20"} />}
          {name === "meditation" && <BiWind color={"#E4C086"} size={"20"} />}
        </Flex>
        <Flex flexDir={"column"} align="flex-start">
          <Text color={"orange.500"} fontWeight={600} fontSize={"md"}>
            {label}
          </Text>
          <Text color={"yellow.500"} fontWeight={500} fontSize={"sm"}>
            {time}
          </Text>
        </Flex>
      </HStack>

      {checked ? (
        <IconCheckOrangeBall w={"8"} h={"8"} />
      ) : (
        <IconDotsHorizontalRounded color={"orange.500"} w={"8"} h={"8"} />
      )}
    </Flex>
  );
}

export function SuggestionBox() {
  const activitiesOptions: Omit<ActivityBoxProps, "checked">[] = [
    {
      label: "filme ou série",
      name: "movie",
      time: "1h30min",
    },
    {
      label: "exercício",
      name: "exercise",
      time: "1h",
    },
    {
      label: "meditação",
      name: "meditation",
      time: "30min",
    },
  ];

  return (
    <Flex flexDir={"column"} gap={4} align={"center"}>
      <CustomHeading
        color={"white.500"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
      >
        sugestões para você
      </CustomHeading>

      <VStack w={"full"} spacing={4}>
        {activitiesOptions.map((option) => (
          <ActivityBox
            key={v4()}
            label={option.label}
            time={option.time}
            name={option.name}
            checked={false}
          />
        ))}
      </VStack>

      <Button size="sm" w="20">
        atualizar
      </Button>
    </Flex>
  );
}
