import {GridItem, VStack, Divider, Text, Image, ButtonGroup, Button, Flex, Tooltip } from '@chakra-ui/react'
import { Context } from "../context/Context";
import { useContext } from "react";
import { ViewProduct } from "./ViewProduct";

export const Product = ({data}) => {

  let {Cart, setCart} = useContext(Context)

  function AddToCart(data) {
    let count = 1
    let {_id, brand, image, name, offer, price} = data
    const newItem = { _id, name, brand, image, offer, price, count };
    let ItemExist = Cart.find(items => items._id === _id)
    if (ItemExist !== undefined ) return 
    setCart([...Cart, newItem]);
    localStorage.setItem('cart', JSON.stringify([...Cart, newItem]));
  }

  let description = data.description.split(" ").slice(0, 13).join(" ")

  return (
<GridItem rounded="lg" overflow="hidden" shadow="md" bg="#f7f7f7">
  <VStack justifyContent="space-between" gap={5} h="100%">
    <Image w="100%" objectFit="cover" src={data.image} alt={data.name} />
    <Flex flexDirection="column" justifyContent="space-between" gap={4} w="100%" p={3}>
      <VStack spacing={2} alignItems="flex-start">
        <Text fontSize={{ base: "lg", sm: "xl" }} fontWeight="medium">
          {data.name}
        </Text>
        <Text fontWeight="medium" opacity=".7">
          {description.slice(0, 100)}...
        </Text>
      </VStack>
      <Flex justifyContent="space-between" alignItems="baseline">
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="semibold"
          textDecoration={data.offer !== 0 && "line-through"}
          opacity=".7"
        >
          {data.price}$
        </Text>
        {data.offer !== 0 && (
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            fontWeight="semibold"
            textColor="green.400"
            opacity=".7"
          >
            {data.offer}$
          </Text>
        )}
      </Flex>
      <Divider />
      <ButtonGroup display="flex" justifyContent="space-between" w="100%">
        <Tooltip label="Add to cart">
          <Button
            colorScheme="green"
            w="40px"
            h="40px"
            rounded="full"
            fontSize="20px"
            shadow="md"
            onClick={() => AddToCart(data)}
          >
            <i className="bi bi-cart"></i>
          </Button>
        </Tooltip>
        <ViewProduct id={data._id} w="50%" />
      </ButtonGroup>
    </Flex>
  </VStack>
</GridItem>
  )
}
