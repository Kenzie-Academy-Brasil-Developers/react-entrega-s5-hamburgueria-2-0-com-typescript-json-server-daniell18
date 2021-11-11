import { Button } from "@chakra-ui/button";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  margin: string;
}
export const ButtonForm = ({ name, margin, ...rest }: ButtonProps) => {
  return (
    <>
      <Button
        fontFamily="inter "
        padding="10px"
        border="none"
        width="80%"
        marginLeft={margin}
        marginTop="7px"
        borderRadius="10px"
        color="white"
        bgColor="#219653"
        variant="solid"
        size="lg"
        type="submit"
        _hover={{
          cursor: "pointer",
          bgColor: "#EB5757",
        }}
        {...rest}
      >
        {name}
      </Button>
    </>
  );
};
