import { Container, Flex, Text, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const GridSection = () => {

  let items = [
    {
      Id: 32323876543,
      Title:"BEST SALES",
      Description:"Discover our best sellers and popular products. Browse our selection of best sellers and find your next favorite purchase.",
      Image:"https://images.unsplash.com/photo-1519326882834-04c334752f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1302&q=80",
      link:"/Best_sales/page/1"
    },
    {
      Id: 87544687539,
      Title:"PRODUCTS ON SALE",
      Description:"Discover irresistible discounts on trendy products, indulge in unbeatable savings today!",
      Image:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80",
      link:"/In_offers/page/1"
    }
  ]

  return (
    <Container as={Flex} flexWrap={{base:"wrap", md:"nowrap"}} gap={5} maxW={"8xl"} p={{base:"3", sm:"10"}} my={16} textColor={"white"}>
    {
      items?.map(item => {
        return <Flex key={item.Id} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={2} w={"100%"} minH={"450px"} rounded={"xl"} bgImage={item.Image} bgSize={"cover"} bgPosition={"center"} bgRepeat={"no-repeat"} >
        <Text fontSize={{base:"2xl", "2xl":"3xl"}} fontWeight={"medium"} textAlign={"center"}>{item.Title}</Text>
        <Text w={"70%"} fontSize={{base:"md", "2xl":"lg"}} textAlign={"center"} opacity={.8}>{item.Description}</Text>
        <Button as={Link} to={item.link} variant={"outline"} textColor={"white"} w={"90%"} maxW={"xs"} mt={5} _hover={{bg:"#5e5e5e50", textColor:"white"}}>GO!</Button>
    </Flex>
      })
    }
    </Container>
  );
};
