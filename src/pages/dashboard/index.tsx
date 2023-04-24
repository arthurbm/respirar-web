import { Box, Flex, useToast, Spinner } from "@chakra-ui/react";
import { type NextPage } from "next";
import { DashboardLayout, FeelingsBox } from "~/components";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getUserActivities, getUserDashboard } from "~/services/user";
import useUserStore from "~/stores/useUserStore";
import { useEffect } from "react";

// Custom hooks to fetch data using React Query
const useDashboardData = () => {
  return useQuery(["dashboardData"], getUserDashboard);
};

const useActivitiesData = (email: string, humour: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["activitiesData", email],
    queryFn: () => getUserActivities({ email: email, humour }),
    enabled,
    // retryOnMount: false,
    retry: false,
    refetchOnMount: false,
  });
};

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { protectPage } = useUserStore();

  const toast = useToast();

  void protectPage(true, router);

  const {
    data: dashboardData,
    isLoading: dashboardLoading,
    isError: dashboardError,
  } = useDashboardData();

  const isDashboardDataLoaded = !!dashboardData;

  const {
    data: activitiesData,
    isLoading: activitiesLoading,
    error: activitiesError,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = useActivitiesData(dashboardData?.email, 2, isDashboardDataLoaded || false);

  useEffect(() => {
    const redirectToInterests = async () => {
      if (dashboardData && !dashboardData.hasInterest) {
        await router.push("/interesses/meus-interesses");
      }
    };

    void redirectToInterests();
  }, [dashboardData, router]);

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

  if (dashboardLoading || activitiesLoading) {
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
        <Flex flexDir={"column"} align={"center"} mx={"8"} h={"full"} gap={6}>
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
