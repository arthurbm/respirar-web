import { Box, Button, Checkbox, CheckboxGroup, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import ellipseBottomBright from "../assets/images/ellipse-bottom-bright.png";
import ellipseBottomDark from "../assets/images/ellipse-bottom-dark.png";
import ellipseTopBright from "../assets/images/ellipse-top-bright.png";
import ellipseTopDark from "../assets/images/ellipse-top-dark.png";
import lineBottom from "../assets/images/line-bottom.png";
import lineTop from "../assets/images/line-top.png";

function AbsoluteImages() {
  return (
    <>
      <Image
        src={ellipseBottomDark}
        alt={"Ellipse bottom dark"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseBottomBright}
        alt={"Ellipse bottom bright"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseTopDark}
        alt={"Ellipse top dark"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={ellipseTopBright}
        alt={"Ellipse top bright"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={lineBottom}
        alt={"Line bottom"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={lineTop}
        alt={"Line top"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </>
  );
}

const MyInterests: NextPage = () => {
  return (
    <>
      <Head>
        <title>Respirar</title>
        <meta name="description" content="Programe atividades prazerosas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <Flex
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          mx={"16"}
          h={"full"}
          gap={8}
        >
          <Flex flexDir={"column"} align={"center"} textAlign={"center"}>
            <CustomHeading
              color={"white.500"}
              fontSize={"4xl"}
              fontWeight={"bold"}
            >
              meus interesses
            </CustomHeading>
            <Text color={"rgba(255, 244, 234, 0.6);"} fontSize={"1xl"} fontWeight={400}>
            fale um pouco sobre o que você gosta e tenha sugestões personalizadas!
            </Text>
          </Flex>

          <CheckboxGroup colorScheme='#CF6E33'>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={"10px"}>
              <Stack>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='movies'>filmes</Checkbox>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='tv_shows'>séries</Checkbox>
              </Stack>
              <Stack>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='meditation'>meditação</Checkbox>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='exercise'>exercício</Checkbox>
              </Stack>
            </Box>
          </CheckboxGroup>

          <Text color={"#FFF4EA"} fontSize={"20px"} fontWeight={"bold"} textAlign={"center"}>
          quais são seus gêneros preferidos?
          </Text>


          <CheckboxGroup colorScheme='#CF6E33'>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={10}>
              <Stack>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='comedy'>comédia</Checkbox>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='drama'>drama</Checkbox>
              </Stack>
              <Stack>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='fiction'>ficção</Checkbox>
                <Checkbox color='#FFF4EA' fontWeight={"bold"} value='fantasy'>fantasia</Checkbox>
              </Stack>
            </Box>
          </CheckboxGroup>

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Button
              color={"darkBlue.500"}
              w={"28"}
              size={"lg"}
              colorScheme={"orange"}
              boxShadow={"0px 0px 40px 0px #CF6E3366"}
            >
              Continuar
            </Button>
          </Flex>

          <Icon
            position={"absolute"}
            bottom={"10"}
            as={IconLogo}
            w={29}
            h={37}
          />
        </Flex>
      </Box>
      <AbsoluteImages />
    </>
  );
};

export default MyInterests;
