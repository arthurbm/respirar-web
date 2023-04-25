import { Box, Flex, useToast, Spinner } from "@chakra-ui/react";
import { type NextPage } from "next";
import {
  DashboardLayout,
  FavoritesGraph,
  FeelingsBox,
  SuggestionBox,
} from "~/components";
import { useRouter } from "next/router";
import useUserStore from "~/stores/useUserStore";
import { useEffect } from "react";
import { useActivitiesData, useDashboardData } from "~/hooks/user";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { protectPage } = useUserStore();

  const toast = useToast();

  const {
    data: dashboardData,
    isLoading: dashboardLoading,
    isError: dashboardError,
    isSuccess: dashboardSuccess,
  } = useDashboardData();

  const isDashboardDataLoaded = dashboardSuccess;

  const {
    data: activitiesData,
    isLoading: activitiesLoading,
    error: activitiesError,
  } = useActivitiesData(dashboardData?.email || "", 2, isDashboardDataLoaded);

  useEffect(() => {
    const redirectToInterests = async () => {
      if (dashboardData && !dashboardData.hasInterest) {
        await router.push("/interesses/meus-interesses");
      }
    };

    void protectPage(true, router);
    void redirectToInterests();
  }, [dashboardData, router, protectPage]);

  if (activitiesError) {
    toast({
      title: "Erro ao carregar atividades",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (dashboardError) {
    toast({
      title: "Erro ao carregar dados",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (dashboardLoading) {
    return (
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <DashboardLayout>
          <Flex flexDir={"column"} align={"center"} mx={"8"} h={"full"} gap={6}>
            <Spinner size="xl" color="blue.500" thickness="4px" />
          </Flex>
        </DashboardLayout>
      </Box>
    );
  }

  return (
    <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
      <DashboardLayout>
        <Flex
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          mx={"8"}
          h={"full"}
          gap={{ base: 6, md: 12 }}
          ml={{ base: 0, md: '18rem' }}
          maxW={{ base: "full", md: "container.md" }}
        >
          <FeelingsBox />

          <SuggestionBox />
          
          <FavoritesGraph
            data={[
              { label: "Task A", time: 30 },
              { label: "Task B", time: 60 },
              { label: "Task C", time: 45 },
            ]}
          />
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
