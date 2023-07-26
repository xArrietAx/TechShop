import { Container, useMediaQuery, Flex } from "@chakra-ui/react";
import { useFetch } from "../hooks/useFetch";
import { Carrousel } from "./Carrousel";
import { Products } from "./ProductsGrid";
import { Spinner } from "./Spinner";
import { ErrorFetching } from "./ErrorFetching";
import { PageName } from "./PageName";

export const RecommendProducts = () => {

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  let { data, isLoading, error } = useFetch(
    "https://techshopin-api.onrender.com/api/RecommendedProducts"
  );

  return <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={{base:"3", sm:"10"}} >
      
      <PageName name={"Recommended products"} />

      {isLoading ? <Spinner h={"10em"} /> : error ? <ErrorFetching h={"10em"} /> : 
      isLargerThan1024 ? <Carrousel data={data} /> : <Products data={data} />}
  </Container>
};
