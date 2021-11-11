import { Input, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import Drawer from "@material-ui/core/Drawer";
import { Box, Flex } from "@chakra-ui/layout";
import Logo from "../../assets/image/logo.png";
import { BsFillCartFill } from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useState } from "react";
import { useCart } from "../../Provider/Cart";
import {
  ContainerAlt,
  ContainerCart,
  ContainerQtd,
  ContainerTitle,
  NumberCart,
  NumberQtd,
} from "./style";

interface itemProps {
  title: string;
  price: number;
  type: string;
  img: string;
  id: number;
  quantity: number;
}

export const Menu = ({ setListFilter, setIsOnSearch, catalogue }: any) => {
  const [isAtt, setIsAtt] = useState(true);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const { cart, addCart, rmvCart, clearItem } = useCart();

  let list = localStorage.getItem("@BurguerKenzie:Cart")
    ? JSON.parse(localStorage.getItem("@BurguerKenzie:Cart") || "")
    : cart;
  const handleClick = () => {
    console.log(search.length);
    if (search.length === 0) {
      setIsOnSearch(false);
    } else {
      console.log(catalogue);
      let aux = catalogue.filter(
        (element: itemProps) =>
          element.title
            .split("")
            .slice(0, search.length)
            .join("")
            .toLocaleLowerCase() === search.toLocaleLowerCase()
      );

      setListFilter(aux);
      setIsOnSearch(true);
    }
  };
  return (
    <>
      <Flex
        padding="10px"
        bgColor="#f5f5f5"
        justify="space-around"
        align="center"
        height="30px"
      >
        <img width="130px" src={Logo} alt="Logo" />
        <InputGroup
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-start"
          width="35vw"
          margin="2px"
        >
          <InputRightElement
            top="1px"
            right="1px"
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              bgColor="#27aE60"
              border="1px solid #27aE60"
              borderRadius="6px"
              onClick={() => handleClick()}
            >
              <FaSearch />
            </Button>
          </InputRightElement>
          <Input
            borderRadius="6px"
            border="1px solid black"
            width="100%"
            variant="outline"
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Box padding="7px" display="flex">
            <NumberCart>{list.length}</NumberCart>
            <BsFillCartFill
              onClick={() => setOpen(true)}
              size={25}
              color="#999999"
            />
          </Box>
          <GiExitDoor
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
            size={25}
            color="#999999"
          />
        </Box>
      </Flex>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <ContainerTitle>
          <h2>Carrinho</h2>
          <h4>
            Total:R$
            {cart
              .reduce((acc, total) => acc + total.price * total.quantity, 0)
              .toFixed(2)
              .toLocaleString()}
          </h4>
        </ContainerTitle>
        {isAtt ? (
          <div>
            {list.map((product: itemProps, index: number) => (
              <ContainerCart key={index}>
                <img src={product.img} alt={product.title} />
                <ContainerAlt>
                  <p>{product.title}</p>
                  <ContainerQtd>
                    <button onClick={() => rmvCart(product, setIsAtt)}>
                      -
                    </button>
                    <NumberQtd>{product.quantity}</NumberQtd>
                    <button onClick={() => addCart(product)}>+</button>
                  </ContainerQtd>
                </ContainerAlt>
                <FaTrash onClick={() => clearItem(product)} />
              </ContainerCart>
            ))}
          </div>
        ) : (
          <div>
            {list.map((product: itemProps, index: number) => (
              <ContainerCart key={index}>
                <img src={product.img} alt={product.title} />
                <ContainerAlt>
                  <p>{product.title}</p>
                  <ContainerQtd>
                    <button onClick={() => rmvCart(product, setIsAtt)}>
                      -
                    </button>
                    <NumberQtd>{product.quantity}</NumberQtd>
                    <button onClick={() => addCart(product)}>+</button>
                  </ContainerQtd>
                </ContainerAlt>
                <FaTrash onClick={() => clearItem(product)} />
              </ContainerCart>
            ))}
          </div>
        )}
        <hr />
      </Drawer>
    </>
  );
};
