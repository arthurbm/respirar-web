import { Box, Flex, useToast, Spinner } from "@chakra-ui/react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FeelingsBox } from "~/components";
import { getUserDashboard } from "~/services/user";
import useUserStore from "~/stores/useUserStore";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { protectPage } = useUserStore();
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  void protectPage(true, router)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getUserDashboard();

        if (!data.hasInterest) {
          await router.push("/interesses/meus-interesses")
        }
      } catch (error) {
        toast({
          title: "Ocorreu um erro",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setLoading(false);
    };
  
    void fetchDashboard();
  }, []);
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
          {loading && <Spinner size="xl" color="blue.500" thickness="4px" />}

          {!loading && (
            <FeelingsBox />

          )}
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
