import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { useHistory } from "react-router";
import { Card } from "../../Components/Card";
import { Menu } from "../../Components/Menu";

import { useLogin } from "../../Provider/LoginProvider";
interface itemProps {
  title: string;
  price: number;
  type: string;
  img: string;
  id: number;
  quantity: number;
}
export const Home = () => {
  const history = useHistory();
  const [isOnSearch, setIsOnSearch] = useState(false);
  const [listFilter, setListFilter] = useState([]);
  const localAuth =
    JSON.parse(localStorage.getItem("@BurguerKenzie:Auth") || "false") || false;
  if (!localAuth) {
    history.push("/");
  }
  const { catalogue } = useLogin();
  const list =
    JSON.parse(localStorage.getItem("@BurguerKenzie:Catalogue") || "") ||
    catalogue;
  console.log(isOnSearch);
  return (
    <>
      <Menu
        setListFilter={setListFilter}
        setIsOnSearch={setIsOnSearch}
        catalogue={list}
      />
      <Flex wrap="wrap" justify="center">
        {isOnSearch
          ? listFilter.map((item: itemProps, index: number) => (
              <Card key={index} item={item} />
            ))
          : list.map((item: itemProps, index: number) => (
              <Card key={index} item={item} />
            ))}
      </Flex>
    </>
  );
};
