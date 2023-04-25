// HalfEllipse.tsx
import React from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

type HalfEllipseProps = BoxProps & {
  width: string | number;
  height: string | number;
  color: string;
  children?: React.ReactNode;
}

export const HalfEllipse: React.FC<HalfEllipseProps> = ({
  width,
  height,
  color,
  children,
  ...props
}) => {
  return (
    <Box
      w={width}
      h={height}
      bg={color}
      borderRadius="50% 50% 0 0"
      position="relative"
      _before={{
        content: "''",
        display: "block",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "50%",
        background: "inherit",
        borderRadius: "0 0 50% 50%",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
