import { Box, Flex } from "@chakra-ui/react";
import { type NextPage } from "next";
import { FeelingsBox } from "~/components";

const Dashboard: NextPage = () => {
  return (
    <>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <Flex
          flexDir={"column"}
          align={"center"}
          mx={"8"}
          pt={"12"}
          h={"full"}
          gap={6}
        >
          <FeelingsBox />
        </Flex>
        {/* <Image
          src={lineTopRight}
          alt={"Line top"}
          style={{ position: "absolute", top: 0, right: 0 }}
        /> */}
      </Box>
    </>
  );
};

export default Dashboard;
