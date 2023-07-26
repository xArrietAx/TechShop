import { useContext, useState, useEffect } from "react";
import {
  Container,
  Text,
  Grid,
  Flex,
  Divider
} from "@chakra-ui/react";
import { Context } from "../context/Context";
import { CartProduct } from "../components/CartProduct";

export const MyCart = () => {

  const [Total, setTotal] = useState(0)

  let {Cart, setCart} = useContext(Context);

  useEffect(() => {
    const calculateTotal = () => {
      const total = Cart.reduce((accumulator, item) => {
        if (item.offer) return accumulator + item.offer * item.count;
        return accumulator + item.price * item.count;
      }, 0);
      setTotal(total.toFixed(2))
    };
    calculateTotal();
  }, [Cart]);
  

  return (
    <Container as={Flex} flexDirection={"column"} gap={5} maxW={"8xl"} p={10}>
     <Flex flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-between"} gap={2}>
     <Text fontWeight={"medium"} fontSize={{ base: "xl", sm: "2xl" }}>
        My cart
      </Text>
      <Text as={"span"} fontWeight={"medium"} fontSize={"lg"} >Total: {Total} $</Text>
     </Flex>
      <Divider />

      {Cart.length === 0 ? (
        <Flex minH={"50vh"}>
          <Text fontSize={"lg"}>You still have nothing!</Text>
        </Flex>
      ) : (
        <Grid
          templateColumns={"repeat(auto-fill, minmax(min(15em, 100%), 1fr))"}
          gap={10}
          mt={10}
          h={"full"}
        >
          {Cart.map((item, i) => {
            return <CartProduct key={item._id + Math.random() + i} Cart={Cart} setCart={setCart} item={item} />
          })}
        </Grid>
      )}
    </Container>
  );
};
