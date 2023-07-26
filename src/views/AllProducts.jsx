import { useContext } from "react";
import { Context } from "../context/Context";
import { Container, Flex } from "@chakra-ui/react";
import { Products } from "../components/ProductsGrid";
import { Pagination } from "../components/Pagination";
import { usePagination } from "../hooks/usePagination";
import { PageName } from "../components/PageName";
import { Spinner } from "../components/Spinner";
import { ErrorFetching } from "../components/ErrorFetching";

export const AllProducts = () => {

  const {currentPage, setCurrentPage} = useContext(Context)

  let { Data, isLoading, error, totalPages, handlePageChange} = usePagination(`https://techshopin-api.onrender.com/api/Products/page/${currentPage}`, "All_products", setCurrentPage)

  return (
    <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={10}>

          <PageName name={"All products"} />

        {isLoading ? <Spinner h={"20em"} /> : error ? <ErrorFetching h={"20em"} /> : (
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