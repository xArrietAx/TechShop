import { Flex, Box, Container } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { Products } from "./ProductsGrid";
import { PageName } from "./PageName";
import { Spinner } from "./Spinner";
import { ErrorFetching } from "./ErrorFetching";

export const TrendingProducts = () => {
  
  let { data, isLoading, error } = useFetch(
    "https://techshopin-api.onrender.com/api/TrendingProducts"
  );

  return (
    <Box py={10} bg={"#f5f5f5"}>
      <Container
        as={Flex}
        flexDirection={"column"}
        maxW={"8xl"}
        p={{ base: "3", sm: "10" }}
      >
        <PageName name={"Trending products"} />

        {isLoading ? (
          <Spinner h={"10em"} />
        ) : error ? (
         <ErrorFetching h={"10em"} />
        ) : (
          <Products data={data} />
        )}
      </Container>
    </Box>
  );
};
