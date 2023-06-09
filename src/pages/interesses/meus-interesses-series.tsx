/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Box, Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import { type NextPage } from "next";
import { AbsoluteImages, CustomHeading, RadioBallGroup } from "~/components";
import { IconLogo } from "~/components/icons/icon-logo";
import modernFamily from "~/assets/images/modern-family.png";
import friends from "~/assets/images/friends.png";
import howIMetYourMother from "~/assets/images/himym.png";
import theOffice from "~/assets/images/the-office.png";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  InterestsSeriesSchema,
  type InterestsSeriesValues,
} from "~/validators/interests-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "~/stores/useFormStore";
import { useRouter } from "next/router";
import { createInterest } from "~/services/interest";

const MyInterestsSeries: NextPage = () => {
  const options = [
    {
      title: "Friends",
      image: friends,
    },
    {
      title: "How I met your mother",
      image: howIMetYourMother,
    },
    {
      title: "Modern Family",
      image: modernFamily,
    },
    {
      title: "The Office",
      image: theOffice,
    },
  ];

  const toast = useToast();
  const { setInterestsSeries, interestsSeries, interestsGeneral } = useFormStore();

  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { isValid },
  } = useForm<InterestsSeriesValues>({
    mode: "onChange",
    resolver: zodResolver(InterestsSeriesSchema),
    defaultValues: interestsSeries,
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<InterestsSeriesValues> = async (data) => {
    setInterestsSeries(data);

    try {
      await createInterest({...data, ...interestsGeneral});
      await router.push("/interesses/resultado");
    } catch (error) {
      toast({
        title: "Ocorreu um erro ao cadastrar seus interesses",
        status: "error",
        duration: 3000,
      });
    }
  };

  const serie = watch("confort_shows");

  return (
    <>
      <Box bgColor={"darkBlue.500"} w={"100%"} h={"100vh"}>
        <Flex
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
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
          </Flex>

          <Text
            color={"#FFF4EA"}
            fontSize={"20px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            você tem uma série de conforto?
          </Text>

          <RadioBallGroup
            options={options}
            name="series"
            value={serie}
            onChange={async (value) => {
              setValue("confort_shows", value);
              await trigger("confort_shows");
            }}
          />

          <Flex flexDir={"column"} align={"center"} gap={6}>
            <Button
              color={"darkBlue.500"}
              w={"28"}
              size={"lg"}
              colorScheme={"orange"}
              boxShadow={"0px 0px 40px 0px #CF6E3366"}
              type={"submit"}
              isDisabled={!isValid}
            >
              Enviar
            </Button>
          </Flex>

          <IconLogo position={"absolute"} bottom={"10"} w={29} h={37} />
        </Flex>
      </Box>
      <AbsoluteImages />
    </>
  );
};

export default MyInterestsSeries;
