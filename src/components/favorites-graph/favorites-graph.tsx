// BarGraph.tsx
import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { CustomHeading } from "../custom-heading";

interface Data {
  label: string;
  time: number;
}

interface BarGraphProps {
  data: Data[];
}

export const FavoritesGraph: React.FC<BarGraphProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.time));

  return (
    <>
      <CustomHeading
        color={"white.500"}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={"bold"}
        alignSelf={"flex-start"}
      >
        seus favoritos
      </CustomHeading>
      <Flex justify={"space-between"} height={"32"} w="full">
        {data.map((item, index) => (
          <VStack key={index} justify={"flex-end"} h={"full"}>
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
            {/* <VStack>
            <Text fontSize="sm" color="white" fontWeight="bold">
              {item.label}
            </Text>
          </VStack> */}
          </VStack>
        ))}
      </Flex>
    </>
  );
};
