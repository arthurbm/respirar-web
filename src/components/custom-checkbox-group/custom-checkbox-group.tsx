import React from "react";
import {
  CheckboxGroup,
  FormControl,
  type CheckboxGroupProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { type Control, useController } from "react-hook-form";
import { type InterestsGeneralValues } from "~/validators/interests-validator";

export type CustomCheckboxGroupProps = {
  name: keyof InterestsGeneralValues;
  control: Control<InterestsGeneralValues, object>;
  // defaultValue: InterestsGeneralValues[keyof InterestsGeneralValues] but empty array is allowed
  // defaultValue: InterestsGeneralValues[keyof InterestsGeneralValues];
} & CheckboxGroupProps;

export function CustomCheckboxGroup({
  name,
  control,
  children,
}: CustomCheckboxGroupProps) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
  });

  console.log("errors", errors);
  const hasErroKey = Object.keys(errors).includes(name);

  return (
    <FormControl w={"auto"} isInvalid={hasErroKey}>
      <CheckboxGroup value={field.value} onChange={field.onChange}>
        {children}
      </CheckboxGroup>
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
}
