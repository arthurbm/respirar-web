import React from "react";
import { Heading, type HeadingProps } from "@chakra-ui/react";
import localFonts from "next/font/local";

const myFont = localFonts({
  src: "../../assets/fonts/eight-one.ttf",
});

export function CustomHeading({ ...props }: HeadingProps) {
  return <Heading style={myFont.style} {...props} />;
}
