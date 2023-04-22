import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  AiOutlineUser,
  AiOutlineHistory,
  AiOutlineLogout,
} from "react-icons/ai";

import {
  Accordion,
  Box,
  Button,
  type ButtonProps,
  Center,
  Icon,
  Flex,
} from "@chakra-ui/react";

import Link from "next/link";
import useDashboardStore from "~/stores/useDashboardStore";
import useUserStore from "~/stores/useUserStore";
import { useRouter } from "next/router";
import { IconLogoDark } from "../icons/icon-logo-dark";

type NavBarProps = {
  handleClick?: () => void;
};

type NavBarLinkProps = ButtonProps & {
  isActive?: boolean;
};

function NavBarButton({ children, ...props }: NavBarLinkProps) {
  // const styleButton = useMultiStyleConfig('NavLink', { variant: 'nav' }) as any
  // const match = useMatch(`${props.to}`)

  // const activeStyle = match || isActive ? styleButton._active : {}
  return (
    <Button
      bgColor={"orange.500"}
      fontWeight="semibold"
      _hover={{ bgColor: "orange.700" }}
      _active={{ bgColor: "orange.700" }}
      {...props}
    >
      {children}
    </Button>
  );
}

export const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {
  const { sidebar } = useDashboardStore();
  const { logout } = useUserStore();
  const router = useRouter();

  const logOut = async () => {
    if (handleClick) {
      handleClick();
    }
    await logout(router);
  };

  const items = [
    {
      path: "/dashboard",
      icon: IoHomeOutline,
      text: "Home",
    },
    {
      path: "/dashboard/profile",
      icon: AiOutlineUser,
      text: "Perfil",
    },
    {
      path: "/dashboard/history",
      icon: AiOutlineHistory,
      text: "Histórico",
    },
  ];

  return (
    <Box
      w="100%"
      h="100%"
      pt={5}
      pb={10}
      px={0}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      backgroundColor="orange.500"
      borderRadius="3xl"
      borderTopLeftRadius="none"
      borderBottomLeftRadius="none"
      overflow="hidden"
      position="relative"
      role="group"
    >
      <Box>
        <Box
          ml={sidebar.logoMargin}
          transitionDuration="normal"
          transitionProperty="margin-left"
          w="fit-content"
        >
          <IconLogoDark />
        </Box>
        <Flex flexDir={"column"} align={"start"} flex={1} pt={8}>
          {items.map((item, index) => (
            <Center key={index} p={2} flexDirection="column" pl={8} pr={10}>
              <Link href={item.path} passHref>
                <NavBarButton
                  leftIcon={<Icon as={item.icon} fontSize="large" />}
                  onClick={handleClick}
                >
                  {item.text}
                </NavBarButton>
              </Link>
            </Center>
          ))}

          <Center p={2} flexDirection="column" pl={8} pr={10}>
            <NavBarButton
              leftIcon={<Icon as={AiOutlineLogout} fontSize="large" />}
              onClick={logOut}
            >
              Logout
            </NavBarButton>
          </Center>
        </Flex>
      </Box>
      {/* <ToggleButton /> */}
    </Box>
  );
};
