import { Flex } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { Card } from "../../Components/Card";
import { Menu } from "../../Components/Menu";

import { useLogin } from "../../Provider/LoginProvider";

export const Home = () => {
  const history = useHistory();
  const localAuth =
    JSON.parse(localStorage.getItem("@BurguerKenzie:Auth") || "false") || false;
  if (!localAuth) {
    history.push("/");
  }
  const { catalogue } = useLogin();
  const list =
    JSON.parse(localStorage.getItem("@BurguerKenzie:Catalogue") || "") ||
    catalogue;
  console.log(list);
  return (
    <>
      <Menu />
      <Flex wrap="wrap" justify="center">
        {list.length > 0 &&
          list.map((item: any, index: number) => (
            <Card key={index} item={item} />
          ))}
      </Flex>
    </>
  );
};
