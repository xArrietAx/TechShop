import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

export const ViewProduct = ({id, w}) => {
  return (
    <Button as={Link} to={`/Product/${id}`} w={w} colorScheme='cyan' variant={"outline"}>View</Button>
  )
}
