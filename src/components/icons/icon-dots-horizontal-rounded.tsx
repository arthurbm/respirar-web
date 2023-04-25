import React from "react";
import { Icon, type IconProps } from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const IconDotsHorizontalRounded = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    width="28"
    height="28"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <circle
      cx="14"
      cy="14"
      r="13"
      stroke="#CF6E33"
      strokeWidth="2"
      fill="none"
    />
    <BiDotsHorizontalRounded size="28" />
  </Icon>
);
