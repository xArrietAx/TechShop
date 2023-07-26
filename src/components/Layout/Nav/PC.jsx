import {Text, Flex} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./CategoriesPc";
import { Context } from "../../../context/Context";

export const PC = () => {

  let {setCurrentPage} = useContext(Context)

  return (
    <Flex gap={5} fontSize={{base:"13px", "2xl":"1em"}}>
        <Text as={Link}  to={"/"}>HOME</Text>
        <Text as={Link} to={`/All_products/page/1`} onClick={() => setCurrentPage(1)} >ALL PRODUCTS</Text>
      <Dropdown />
    </Flex>
  );
};