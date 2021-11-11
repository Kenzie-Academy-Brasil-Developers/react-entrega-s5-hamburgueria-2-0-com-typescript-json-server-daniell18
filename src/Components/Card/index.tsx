import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import { useCart } from "../../Provider/Cart";
import { ButtonForm } from "../Button";
interface itemProps {
  item: {
    title: string;
    price: number;
    type: string;
    img: string;
    id: number;
    quantity: number;
  };
}
export const Card = ({ item }: itemProps) => {
  const { addCart } = useCart();
  return (
    <>
      <Flex
        margin="5px"
        marginRight="7px"
        direction="column"
        border="2px solid gray"
        borderRadius="4px"
        _hover={{
          border: "2px solid green",
          color: "#27aE60",
          width: "305px",
        }}
        width="300px"
        justify="center"
        align="flex-start"
        fontFamily="inter"
      >
        <Container
          bgColor="#f5f5f5"
          height="100px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img width="100px" src={item.img} alt={item.title} />
        </Container>
        <Box
          padding="10px"
          paddingLeft="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text margin="0px" mt="15px" fontWeight="bold">
            {item.title}
          </Text>
          <Text color="#999999" fontWeight="bold" margin="0px" mt="10px">
            {item.type}
          </Text>
          <Text mt="10px">
            R${Number(item.price).toFixed(2).toLocaleString()}
          </Text>
          <ButtonForm
            onClick={() => addCart(item)}
            margin="0px"
            name="Adiconar"
          />
        </Box>
      </Flex>
    </>
  );
};
