import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CustomHeading } from "../custom-heading";
import { v4 } from "uuid";
import { IconCheckOrangeBall } from "../icons/icon-check-orange-ball";
import { IconDotsHorizontalRounded } from "../icons/icon-dots-horizontal-rounded";
import { BiMoviePlay, BiWalk, BiWind, BiRun } from "react-icons/bi";
import { type ChosenActivities } from "~/types/activities";
import { intervalToDuration, formatDuration } from "date-fns";
import Link from "next/link"

type ActivityBoxProps = {
  label: string;
  name: string;
  time: string;
  checked: boolean;
};

function ActivityBox({ label, time, checked, name }: ActivityBoxProps) {
  return (
    <Link href={`dashboard/atividade?exercicio`} passHref style={{ width: "100%" }}>
      <Flex w="full">
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
              {name === "tv_show" && <BiMoviePlay color={"#E4C086"} size={"20"} />}
              {name === "exercise" && <BiWalk color={"#E4C086"} size={"20"} />}
              {name === "walk" && <BiRun color={"#E4C086"} size={"20"} />}
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
      </Flex>
    </Link>
  );
}

export function SuggestionBox({ activities, availableTimes }: ChosenActivities) {


  const getTimeDifference = (start: string, end: string) => {

    const convertedStart = new Date(start);
    const convertedEnd = new Date(end);
    const interval = intervalToDuration({ start: convertedStart, end: convertedEnd });
    const durationString = formatDuration(interval, { format: ['hours', 'minutes'] });
    return durationString;
  };

  const splitIfCSV = (label: string) => {
    if (label.includes(",")) {
      const res = label.split(",")[0];
      return res as string;
    }
    return label;
  };

  const getLabelOption = (label: string) => {
    switch (label) {
      case "movie":
        return "filme ou série";
      case "exercise":
        return "exercício";
      case "meditation":
        return "meditação";
      case "walk":
        return "caminhada";
      case "tv_show":
        return "série";
      default:
        return "";
    }
  }

  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  return (
    <Flex flexDir={"column"} gap={4} align={"center"} w={"full"}>
      <CustomHeading
        color={"white.500"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
        alignSelf={"flex-start"}
      >
        sugestões para você
      </CustomHeading>

      <VStack w={"full"} spacing={2}>
        {activities.options.map((option) => (
          <ActivityBox
            key={v4()}
            label={getLabelOption(splitIfCSV(option))}
            time={getTimeDifference(
              availableTimes[0]?.start as string,
              availableTimes[0]?.end as string
            )}
            name={splitIfCSV(option)}
            checked={getRandomBoolean()}
          />
        ))}
      </VStack>

      <Button size="sm" w="20">
        atualizar
      </Button>
    </Flex>
  );
}
