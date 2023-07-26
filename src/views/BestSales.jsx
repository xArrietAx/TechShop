import { Container, Flex } from "@chakra-ui/react";
import { usePagination } from "../hooks/usePagination";
import { Products } from "../components/ProductsGrid";
import { Pagination } from "../components/Pagination";
import { useContext } from "react";
import { Context } from "../context/Context";
import { PageName } from "../components/PageName";
import { Spinner } from "../components/Spinner";
import { ErrorFetching } from "../components/ErrorFetching";

export const BestSales = () => {
  const { currentPage, setCurrentPage } = useContext(Context);

  let { Data, isLoading, error, handlePageChange, totalPages } = usePagination(
    `https://techshopin-api.onrender.com/api/BestSales/page/${currentPage}`,
    "Best_sales",
    setCurrentPage
  );

  return (
    <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={10}>
      <PageName name={"Best sales!"} />

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
