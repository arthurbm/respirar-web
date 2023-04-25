import { type NextPage } from "next";
import { DashboardLayout } from "~/components";
import { useDashboardData } from "~/hooks/user";

const Profile: NextPage = () => {

  const {
    data: dashboardData,
    isLoading: dashboardLoading,
    isError: dashboardError,
  } = useDashboardData();
  return (
    <DashboardLayout>
      <h1>Opa</h1>
    </DashboardLayout>
  );
};

export default Profile;
