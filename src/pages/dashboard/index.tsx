import { Box, Flex } from "@chakra-ui/react";
import { type NextPage } from "next";
import { DashboardLayout, FeelingsBox } from "~/components";

const Dashboard: NextPage = () => {
  return (
    <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
      <DashboardLayout>
        <Flex
          flexDir={"column"}
          align={"center"}
          mx={"8"}
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
      </DashboardLayout>
    </Box>
  );
};

export default Dashboard;
