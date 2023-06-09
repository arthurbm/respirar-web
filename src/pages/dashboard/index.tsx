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

  const dashboardhasActivity = dashboardSuccess && dashboardData.hasInterest;

  const {
    data: activitiesData,
    isLoading: activitiesLoading,
    error: activitiesError,
  } = useActivitiesData(dashboardData?.email || "", 2, dashboardhasActivity);
  console.log('activitiesData', activitiesData)

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

  if (dashboardLoading || !dashboardData?.hasInterest || activitiesLoading) {
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
          // mx={"8"}
          h={"full"}
          gap={{ base: 6, md: 12 }}
          mx={{ base: 0, lg: "auto" }}
          maxW={{ base: "full", md: "container.md" }}
        >
          <FeelingsBox />

          {activitiesData && !activitiesLoading && (
            <SuggestionBox
              activities={activitiesData.activities}
              availableTimes={activitiesData.availableTimes}
            />
          )}

          <FavoritesGraph
            data={[
              { label: "filmes ou séries", time: 2, name: "movie" },
              { label: "exercícios", time: 4, name: "exercise" },
              { label: "meditação", time: 3, name: "meditation" },
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
