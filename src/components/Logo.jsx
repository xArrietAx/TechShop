import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
   <Text as={Link} to={"/"} fontWeight={"medium"} fontSize={{base:"3xl", "2xl":"4xl"}} textColor={"gray.600"} _hover={{textColor:"gray.600"}} >
    Tech<Text as={"span"} textColor={"cyan.400"} >Shop</Text>
   </Text>
  )
}