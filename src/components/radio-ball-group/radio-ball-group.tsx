import { Flex, Grid, Text, useRadio, useRadioGroup } from "@chakra-ui/react";
import Image, { type StaticImageData } from "next/image";
import React from "react";

// import { Container } from './styles';

type Options = {
  title: string;
  image: StaticImageData;
};

interface RadioBallGroupProps {
  options: Options[];
  name: string;
  value: string;
  onChange: (option: string) => void;
}

export function RadioBallGroup({ options, ...props }: RadioBallGroupProps) {
  const { getRootProps, getRadioProps } = useRadioGroup(props);
  const group = getRootProps();

  return (
    <Grid {...group} flexDir={"column"} gridTemplateColumns={"1fr 1fr"} gridRowGap={"16px"}>
      {options.map((option) => {
        const radio = getRadioProps({ value: option.title });
        return (
          <RadioBall
            title={option.title}
            image={option.image}
            key={option.title}
            {...radio}
          >
            {option.title}
          </RadioBall>
        );
      })}
    </Grid>
  );
}

type AuxProps = ReturnType<typeof useRadioGroup>;
type AuxProps2 = ReturnType<AuxProps["getRadioProps"]>;
type RadioBallProps = AuxProps2 & Options;

export function RadioBall({ title, image, ...props }: RadioBallProps) {
  const { state, getInputProps, getRadioProps, htmlProps } = useRadio(props);

  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Flex
      {...htmlProps}
      as="label"
      cursor="pointer"
      flexDir={"column"}
      align={"center"}
      justify={"center"}
      gap={2}
    >
      <input {...input} hidden />
      <Flex
        {...radio}
        borderWidth={2}
        // borderRadius="full"
        borderColor={state.isChecked ? "orange.500" : "transparent"}
        w={"24"}
        h={"24"}
        // p={1}
        rounded="full"
      >
        <Image src={image} alt={title} style={{ borderRadius: "100px" }} />
      </Flex>
      <Text textAlign={"center"} fontWeight={500} color={state.isChecked ? "orange.500" :"white.500"} fontSize={"sm"}>
        {title}
      </Text>
    </Flex>
  );
}
