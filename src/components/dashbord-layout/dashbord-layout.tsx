import { type ReactNode } from "react";

import {
  Box,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import useDashboardStore from "~/stores/useDashboardStore";
import { NavBar } from "../nav-bar";

type Props = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Box position="fixed" top="0" left="0" h="100%" zIndex={99}>
        <Sidebar />
      </Box>

      <DashboardContainer>
        {children}
      </DashboardContainer>
    </>
  );
};

const DashboardContainer = ({ children }: Props) => {
  const { sidebar } = useDashboardStore();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Box
      minH="full"
      // bg="gray.50"
      pt={{ base: 0, lg: 14 }}
      pl={{ base: 0, lg: sidebar.width }}
    >
      <Container w="container.xl" maxWidth="90%">
        {isMobile && <Header />}
        {children}
      </Container>
    </Box>
  );
};

const Sidebar = () => {
  const { showNav, setShowNav, sidebar } = useDashboardStore();
  const renderAsDrawer = useBreakpointValue({ base: true, lg: false });

  if (renderAsDrawer) {
    return (
      <Drawer isOpen={showNav} onClose={setShowNav.off} placement="left">
        <DrawerOverlay />
        <DrawerContent background="none">
          <NavBar handleClick={setShowNav.off} />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w={sidebar.width}
      h="inherit"
      display={{ base: "none", lg: "flex" }}
      transitionDuration="normal"
      transitionProperty="width"
    >
      <NavBar />
    </Box>
  );
};

const Header = () => {
  const { setShowNav } = useDashboardStore();
  return (
    <HStack justify="flex-start" py={4} as="header" alignItems="center">
      <IconButton
        icon={<Icon as={HamburgerIcon} />}
        aria-label="Abrir Menu"
        onClick={setShowNav.on}
        bgColor="transparent"
        color="white.500"
      />
    </HStack>
  );
};

// export const EditorLayout = () => {
//   // const collapsible = useBreakpointValue({ base: false, lg: true });

//   return (
//     // <DashboardProvider collapsible={collapsible}>
//       <Box w="full" h="100%" display="flex" background="gray.100">
//         <Sidebar />

//         <Box display="flex" flex={1}>
//           <Outlet />
//         </Box>
//       </Box>
//     // </DashboardProvider>
//   );
// };
