import {
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Button,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";

export const ProductDetails = ({ Data }) => {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={5}>
      <GridItem>
        <Image src={Data?.image} />
      </GridItem>
      <GridItem>
        <Flex flexDirection={"column"} gap={5}>
          <Flex flexDirection={"column"}>
            <Text
              as={"span"}
              fontSize={{ base: "xl", sm: "3xl" }}
              fontWeight={"medium"}
            >
              {Data.name}
            </Text>
            <Text
              as={"span"}
              fontSize={{ base: "lg", sm: "2xl" }}
              opacity={0.8}
            >
              {Data.brand}
            </Text>
          </Flex>
          <Text fontSize={{ base: "md", sm: "lg" }} opacity={0.9}>
            {Data.description}
          </Text>
          <Divider />
          <Text as={"span"} fontWeight={"semibold"} fontSize={"xl"}>
            Features
          </Text>
          <List mb={3}>
            {Data.features.map((feature) => {
              return (
                <ListItem key={feature._id} fontWeight={"semibold"}>
                  {feature.name}:{" "}
                  <Text as={"span"} fontSize={"15px"} fontWeight={"400"}>
                    {feature.value}
                  </Text>
                </ListItem>
              );
            })}
          </List>
          <Button
            variant={"outline"}
            colorScheme="green"
            w={"90%"}
            maxW={"sm"}
            mx={"auto"}
          >
            BUY!
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};
