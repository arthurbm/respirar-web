import React from "react";
import {
  CheckboxGroup,
  FormControl,
  type CheckboxGroupProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { type Control, useController } from "react-hook-form";
import { type InterestsGeneralValues } from "~/validators/interests-general-validator";

export type CustomCheckboxGroupProps = {
  name: keyof InterestsGeneralValues;
  control: Control<InterestsGeneralValues, object>;
  defaultValue: InterestsGeneralValues[keyof InterestsGeneralValues];
} & CheckboxGroupProps;

export function CustomCheckboxGroup({
  name,
  control,
  // defaultValue,
  children,
}: CustomCheckboxGroupProps) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    // defaultValue,
  });

  const errorIsEmptyObject = Object.keys(errors).length === 0;
  console.log('errors', errors)
  console.log('errorIsEmptyObject', errorIsEmptyObject)

  const errorMessage = () => {
    console.log("errors", errors)
    console.log("errors[name]?.message", errors[name]?.message)
    if (errorIsEmptyObject) {
      return errors[name]?.message;
    }
  }

  return (
    <FormControl isInvalid={!errorIsEmptyObject}>
      <CheckboxGroup value={field.value} onChange={field.onChange}>
        {children}
      </CheckboxGroup>
      <FormErrorMessage>{errorMessage()}</FormErrorMessage>
    </FormControl>
  );
}
