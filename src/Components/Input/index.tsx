import { Flex } from "@chakra-ui/layout";
import { Input, InputGroup } from "@chakra-ui/react";
import { InputLeftElement } from "@chakra-ui/input";

import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib";
interface inputProps {
  label?: string;
  placeholder: string;
  error?: FieldError | null;
  icon?: IconType;
  type: string;
  register: UseFormRegister<FieldValues>;
  reg?: string;
}
export const Inputform = ({
  placeholder,
  icon: Icon,
  type,
  register,
  reg,
}: inputProps) => {
  return (
    <>
      <Flex justify="center" align="center">
        <InputGroup
          mt="2.5"
          justifyContent="center"
          display="flex"
          alignItems="center"
          width="90%"
        >
          {Icon && (
            <InputLeftElement mr="5px" position="unset">
              <Icon />
            </InputLeftElement>
          )}
          {reg && (
            <Input
              width="260px"
              margin="7px"
              type={type}
              borderRadius="20px"
              border="1px solid black"
              padding="8px"
              variant="flushed"
              placeholder={placeholder}
              {...register(reg)}
            />
          )}
        </InputGroup>
      </Flex>
    </>
  );
};
