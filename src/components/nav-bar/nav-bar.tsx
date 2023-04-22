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
  href: string;
};

function NavBarLink({ children, isActive, href, ...props }: NavBarLinkProps) {
  // const styleButton = useMultiStyleConfig('NavLink', { variant: 'nav' }) as any
  // const match = useMatch(`${props.to}`)

  // const activeStyle = match || isActive ? styleButton._active : {}

  return (
    <Link href={href} passHref>
      <Button
        // variant='nav'
        // sx={{ ...activeStyle }}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}

export const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {
  const { sidebar, shrink } = useDashboardStore();
  const { logout } = useUserStore();
  const router = useRouter();

  const logOut = async () => {
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

    {
      path: "/dashboard/logout",
      icon: AiOutlineLogout,
      text: "Logout",
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
              <NavBarLink
                leftIcon={
                  <Icon
                    as={item.icon}
                    fontSize="large"
                    // mr={2}
                  />
                }
                // colorScheme={"orange"}
                bgColor={"orange.300"}
                // color={"darkBlue.500"}
                href={item.path}
                onClick={handleClick}
              >
                {item.text}
              </NavBarLink>
            </Center>
          ))}
        </Flex>
      </Box>
      {/* <ToggleButton /> */}
    </Box>
  );
};

// const ToggleButton = () => {
//   const { shrink, setShrink, collapsible } = useContext(DashboardContext);

//   if (!collapsible) return null;

//   const rotation = shrink ? "rotate(180deg)" : "";
//   const position = !shrink ? "-50%" : "50%";
//   const right = shrink ? "50%" : "1";
//   const opacity = shrink ? 1 : 0;

//   const handleExpandMenu = () => {
//     setShrink.toggle();
//     sendGAEvent("expand_menu");
//   };

//   return (
//     <IconButton
//       onClick={handleExpandMenu}
//       icon={
//         <Icon
//           as={BiChevronLeft}
//           color="white"
//           fontWeight="black"
//           fontSize="2xl"
//         />
//       }
//       aria-label="menu"
//       position="absolute"
//       top="50%"
//       right={right}
//       transform={`translate(${position}) ${rotation}`}
//       bg="blue.600"
//       rounded="full"
//       colorScheme="blue"
//       transitionProperty="all"
//       transitionDuration="normal"
//       opacity={opacity}
//       _focus={{ boxShadow: "none" }}
//       _groupHover={{ opacity: 1 }}
//     />
//   );
// };
