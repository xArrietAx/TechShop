import { Container, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ProductDetails } from "../components/ProductDetails";
import { Spinner } from "../components/Spinner";
import { ErrorFetching } from "../components/ErrorFetching";

export const Product = () => {
  let { id } = useParams();

  let { data, isLoading, error } = useFetch(
    `https://techshopin-api.onrender.com/api/Product/${id}`
  );

  return (
    <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={10}>
      {isLoading ? (
        <Spinner h={"20em"} />
      ) : error ? (
        <ErrorFetching h={"20em"} />
      ) : (
        <ProductDetails Data={data} />
      )}
    </Container>
  );
};
