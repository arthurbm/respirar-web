import { useQuery } from "@tanstack/react-query";
import { getRecommendedActivities, getUserDashboard } from "~/services/user";

// Custom hooks to fetch data using React Query
export const useDashboardData = () => {
  return useQuery({ queryKey: ["dashboardData"], queryFn: getUserDashboard, staleTime: 1000 * 60 * 60 * 24 });
};

export const useActivitiesData = (email: string, humour: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["activitiesData"],
    queryFn: async () => await getRecommendedActivities({ email: email, humour }),
    enabled,
    // retryOnMount: false,
    // retry: false,
    // refetchOnMount: false,
  });
};