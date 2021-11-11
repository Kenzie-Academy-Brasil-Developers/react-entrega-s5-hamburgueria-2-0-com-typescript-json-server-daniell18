import { Flex } from "@chakra-ui/layout";
import Logo from "../../assets/image/logo.png";
import subLogo from "../../assets/image/subLogo.png";
export const Header = () => {
  return (
    <>
      <Flex justify="center" align="flex-start" direction="column">
        <img width="180px" src={Logo} alt="logo" />
        <img width="300px" src={subLogo} alt="subLogo" />
      </Flex>
    </>
  );
};
