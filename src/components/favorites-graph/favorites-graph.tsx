// BarGraph.tsx
import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { CustomHeading } from "../custom-heading";
import { BiMoviePlay, BiWalk, BiWind } from "react-icons/bi";

interface Data {
  label: string;
  time: number;
  name: "movie" | "exercise" | "meditation";
}

interface BarGraphProps {
  data: Data[];
}

export const FavoritesGraph: React.FC<BarGraphProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.time));

  return (
    <Flex flexDir={"column"} w="full" gap={4}>
      <CustomHeading
        color={"white.500"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
        alignSelf={"flex-start"}
      >
        seus favoritos
      </CustomHeading>

      <Flex justify={"space-between"} height={"48"} w="full">
        {data.map((item, index) => (
          <VStack key={index} justify={"flex-end"} h={"full"} spacing={2}>
            <Flex position={"relative"} h={"full"} align={"flex-end"}>
              <Flex
                key={index}
                flexDirection="column"
                align="center"
                justify="center"
                borderTopRadius={"lg"}
                w="10"
                height={`${(item.time / maxValue) * 100}%`}
                bgColor="orange.500"
              >
                <Text fontSize="xs" color="yellow.500" fontWeight={600}>
                  {item.time}h
                </Text>
              </Flex>
            </Flex>
            <VStack>
              {item.name === "movie" && (
                <BiMoviePlay color={"#E4C086"} size={"20"} />
              )}
              {item.name === "exercise" && (
                <BiWalk color={"#E4C086"} size={"20"} />
              )}
              {item.name === "meditation" && (
                <BiWind color={"#E4C086"} size={"20"} />
              )}
              <Text
                key={index}
                fontSize="sm"
                color="yellow.500"
                opacity={0.8}
                fontWeight="bold"
                alignSelf={"center"}
              >
                {item.label}
              </Text>
            </VStack>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
};
