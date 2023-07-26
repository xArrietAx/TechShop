import { Box, Container, Grid, GridItem, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box style={{ backgroundColor: "#f7f7f7" }}>
      <Container as={Grid}
        templateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
        gap={3}
        maxW={"8xl"}
        p={{base:"3", sm:"10"}}
      >
        <GridItem
          colSpan={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
        >
          <Box>
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              mb={2}
            >
              Embrace the <Text as={"span"} textColor={"red.400"}>Tech Revolution</Text> and Discover Cutting-Edge Products
            </Text>
            <Text fontWeight={"medium"} fontSize={{base:"md", md:"lg", "2xl":"lg"}} color="gray.600" opacity={".7"}>
              Immerse Yourself in the Latest Innovations in our Hero Technology
              Section and Experience the Future of Digital Technology
            </Text>
          </Box>

          <Box w={"full"}>
          <Button as={Link} to={"/All_products/page/1"} w={"60%"} maxW={"230px"} variant={"outline"} colorScheme="green" >
              BUY NOW!
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            src="https://www.seekpng.com/png/detail/2-20371_laptop-notebook-png-image-desktop-computer-laptop-computer.png"
            alt="Laptop Notebook Png Image - Desktop Computer Laptop Computer Accessories@seekpng.com"
          />
        </GridItem>
      </Container>
    </Box>
  );
};
