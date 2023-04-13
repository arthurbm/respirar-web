import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import { AbsoluteImages, CustomHeading } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import Link from "next/link";

const MyInterests: NextPage = () => {
  return (
    <>
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
            <Text
              color={"rgba(255, 244, 234, 0.6);"}
              fontSize={"1xl"}
              fontWeight={400}
            >
              fale um pouco sobre o que você gosta e tenha sugestões
              personalizadas!
            </Text>
          </Flex>

          <CheckboxGroup colorScheme="#CF6E33">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={"10px"}>
              <Stack>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="movies">
                  filmes
                </Checkbox>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="tv_shows">
                  séries
                </Checkbox>
              </Stack>
              <Stack>
                <Checkbox
                  color="#FFF4EA"
                  fontWeight={"bold"}
                  value="meditation"
                >
                  meditação
                </Checkbox>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="exercise">
                  exercício
                </Checkbox>
              </Stack>
            </Box>
          </CheckboxGroup>

          <Text
            color={"#FFF4EA"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            quais são seus gêneros preferidos?
          </Text>

          <CheckboxGroup colorScheme="#CF6E33">
            <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={10}>
              <Stack>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="comedy">
                  comédia
                </Checkbox>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="drama">
                  drama
                </Checkbox>
              </Stack>
              <Stack>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="fiction">
                  ficção
                </Checkbox>
                <Checkbox color="#FFF4EA" fontWeight={"bold"} value="fantasy">
                  fantasia
                </Checkbox>
              </Stack>
            </Box>
          </CheckboxGroup>

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Link href={"meus-interesses-series"}>
              <Button
                color={"darkBlue.500"}
                w={"28"}
                size={"lg"}
                colorScheme={"orange"}
                boxShadow={"0px 0px 40px 0px #CF6E3366"}
              >
                Continuar
              </Button>
            </Link>
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
