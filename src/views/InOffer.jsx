import { Container, Flex } from "@chakra-ui/react";
import { usePagination } from "../hooks/usePagination";
import { Products } from "../components/ProductsGrid";
import { Pagination } from "../components/Pagination";
import { useContext } from "react";
import { Context } from "../context/Context";
import { ErrorFetching } from "../components/ErrorFetching";
import { Spinner } from "../components/Spinner";
import { PageName } from "../components/PageName";

export const InOffers = () => {
  const { currentPage, setCurrentPage } = useContext(Context);

  let { Data, handlePageChange, isLoading, error, totalPages } = usePagination(
    `https://techshopin-api.onrender.com/api/InOffers/page/${currentPage}`,
    "In_offers",
    setCurrentPage
  );

  return (
    <Container as={Flex} flexDirection={"column"} maxW={"8xl"} p={10}>

    <PageName name={"In offer!"} />
     
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
