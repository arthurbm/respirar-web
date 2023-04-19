/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import {
  AbsoluteImages,
  CustomCheckboxGroup,
  CustomHeading,
} from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  InterestsGeneralSchema,
  type InterestsGeneralValues,
} from "~/validators/interests-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "~/store/useFormStore";
import { useRouter } from "next/router";
import useUserStore from "~/stores/useUserStore";

const MyInterests: NextPage = () => {
  const { logout, protectPage } = useUserStore();
  const router = useRouter();

  void protectPage(true, router);

  const { setInterestsGeneral, interestsGeneral } = useFormStore();

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<InterestsGeneralValues>({
    mode: "onChange",
    resolver: zodResolver(InterestsGeneralSchema),
    defaultValues: interestsGeneral,
  });

  const onSubmit: SubmitHandler<InterestsGeneralValues> = async (data) => {
    console.log(data);
    setInterestsGeneral(data);
    await router.push("/meus-interesses-series");
  };

  return (
    <>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <Flex
          as={"form"}
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          mx={"16"}
          h={"full"}
          gap={8}
          onSubmit={handleSubmit(onSubmit)}
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

          <CustomCheckboxGroup
            name="activities"
            control={control}
            // defaultValue={[]}
            colorScheme="#CF6E33"
          >
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
          </CustomCheckboxGroup>

          <Text
            color={"#FFF4EA"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            quais são seus gêneros preferidos?
          </Text>

          <CustomCheckboxGroup
            name="genders"
            control={control}
            defaultValue={[]}
            colorScheme="#CF6E33"
          >
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
          </CustomCheckboxGroup>

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Button
              color={"darkBlue.500"}
              w={"28"}
              size={"lg"}
              colorScheme={"orange"}
              boxShadow={"0px 0px 40px 0px #CF6E3366"}
              isDisabled={!isValid}
              type="submit"
            >
              Continuar
            </Button>
          </Flex>

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Button
              color={"darkBlue.500"}
              w={"28"}
              size={"lg"}
              colorScheme={"orange"}
              boxShadow={"0px 0px 40px 0px #CF6E3366"}
              onClick={() => logout(router)}
            >
              Logout
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