import { Container, Flex } from "@chakra-ui/react";
import { usePagination } from "../hooks/usePagination";
import { Products } from "../components/ProductsGrid";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Pagination } from "../components/Pagination";
import { Context } from "../context/Context";
import { PageName } from "../components/PageName";
import { ErrorFetching } from "../components/ErrorFetching";
import { Spinner } from "../components/Spinner";

export const Categories = () => {
  const { currentPage, setCurrentPage } = useContext(Context);

  let { category } = useParams();

  let { Data, isLoading, handlePageChange, error, totalPages } = usePagination(
    `https://techshopin-api.onrender.com/api/category/${category}/page/${currentPage}`,
    `category/${category}`,
    setCurrentPage
  );

  return (
    <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={10}>
      <PageName name={category} />

      {isLoading ? (
        <Spinner h={"20em"} />
      ) : error ? (
        <ErrorFetching h={"20em"} />
      ) : (
        Data.length > 0 && (
          <>
            <Products data={Data} />
            <Pagination setPage={handlePageChange} TotalPage={totalPages} />
          </>
        )
      )}
    </Container>
  );
};
