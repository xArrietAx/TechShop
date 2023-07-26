import {
  Grid,
  GridItem,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Categories = () => {

  let Categories = [
    {
      id: 215876232314,
      name: "Phones",
      Image:
        "https://www.pngitem.com/pimgs/m/220-2208413_tienda-de-celulares-telmovil-samsung-galaxy-j5-samsung.png",
      link:"/Category/Smartphones/page/1"
    },
    {
      id: 2432423344288,
      name: "Tablets",
      Image:
        "https://www.pngitem.com/pimgs/m/112-1121621_tablet-png-transparent-png.png",
      link:"/Category/Tablets/page/1"
    },
    {
      id: 2756534453239,
      name: "Laptops",
      Image:
        "https://www.pngitem.com/pimgs/m/69-690052_asus-rog-strix-ultrawide-hd-png-download.png",
      link:"/Category/Laptops/page/1"
    },
  ];

  return (
    <Container as={VStack} alignItems={"normal"} gap={8} maxW={"8xl"} p={{base:"3", sm:"10"}}>
      <Text fontWeight={"medium"} fontSize={{base:"xl", sm:"2xl", "2xl":"3xl"}}>
        Categories
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, minmax(min(14em, 100%), 20em))",
          md: "repeat(2, 320px)",
          lg: "repeat(3, 300px)",
        }}
        templateRows={"200px"}
        justifyContent={"center"}
        gap={5}
      >
        {Categories.map((category) => {
          return (
            <GridItem
            as={Link}
            to={category.link}
              key={category.id}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100%"}
              rounded={"xl"}
              bg={"#f7f7f7"}
              fontWeight={"semibold"}
              textColor={"white"}
              overflow={"hidden"}
              cursor={"pointer"}
              _hover={{textColor:"white"}}
            >
              <Text position={"absolute"} zIndex={343}>
                {category.name}
              </Text>
              <Image
                w={"100%"}
                h={"180px"}
                transition={"transform .2s ease-in-out"}
                _hover={{
                  transform: "scale(1.1)",
                }}
                src={category.Image}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}