import {
  Text,
  Flex,
  Divider,
  Image,
  Button,
  ButtonGroup,
  VStack,
  Box,
  GridItem, 
} from "@chakra-ui/react";

export const CartProduct = ({Cart, setCart, item}) => {

  function Delete(id) {
      const updatedCart = Cart.filter(item => item._id !== id);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  } 

  function handleIncrement(id) {
    const updatedCart = Cart.map(item => {
      if (item._id === id) {
        if (item.count === 30) {
          return item
        }
        return {
          ...item,
          count: item.count + 1
        };
      }
      return item;
    })
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  function handleDecrement(id) {
    const updatedCart = Cart.map(item => {
      if (item._id === id) {
        if (item.count === 1) {
          return null; 
        }
        return {
          ...item,
          count: item.count - 1
        };
      }
      return item;
    }).filter(Boolean)
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

return (
  <GridItem position={"relative"} rounded="lg" overflow="hidden" shadow="md" bg="#f7f7f7">

<Box position={"absolute"} top={1} left={1} fontSize={"lg"} textColor={"red.500"} bg={"transparent"} cursor={"pointer"} _hover={{textColor:"red.600"}}>
<i className="bi bi-x-circle-fill" data-id={item._id} onClick={e => Delete(e.target.dataset.id)} ></i>
</Box>

<VStack justifyContent="space-between" gap={5} h="100%">
  <Image w="100%" objectFit={"cover"} loading="lazy" src={item.image} alt={item.name} />
  
  <Flex flexDirection="column" justifyContent="space-between" gap={4} w="100%" p={3}>
    <Flex alignItems="center" justifyContent={"space-between"}>
      <Text position={"relative"} fontSize={{ base: "lg", sm: "xl" }} fontWeight="medium">
        {item.name} 
      </Text>
      <Text fontWeight={"medium"} fontSize={"lg"} >x{item.count}</Text>
    </Flex>
    <Flex justifyContent="space-between" alignItems="baseline">
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        fontWeight="semibold"
        textDecoration={item.offer !== 0 && "line-through"}
        opacity=".7"
      >
        {item.price}$
      </Text>
      {item.offer !== 0 && (
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="semibold"
          textColor="green.400"
          opacity=".7"
        >
          {item.offer}$
        </Text>
      )}
    </Flex>
    <Divider />
    <ButtonGroup flexWrap={{base:"wrap", sm:"nowrap"}} justifyContent={"space-between"} gap={4}>
      <Button colorScheme="green" w={"full"}>Buy</Button>
      <Button w={{base:"30%", sm:""}} fontWeight={"bold"} bg={"gray.200"} data-id={item._id} onClick={e => handleIncrement(e.target.dataset.id)} >+</Button>
      <Button w={{base:"30%", sm:""}} fontWeight={"bold"} bg={"gray.300"} data-id={item._id} onClick={e => handleDecrement(e.target.dataset.id)} >-</Button>
    </ButtonGroup>
  </Flex>
</VStack>
</GridItem>
)
}