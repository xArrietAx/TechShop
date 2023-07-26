import { Grid } from "@chakra-ui/react";
import { Product } from "./Product";

export const Products = ({data}) => {
  return (
    <Grid templateColumns={"repeat(auto-fill, minmax(min(14em, 100%), 1fr))"} gap={14} mt={10} >
    {
      data.map(data => {
        return <Product key={data._id} data={data} />
      })
    }
  </Grid>
  )

}