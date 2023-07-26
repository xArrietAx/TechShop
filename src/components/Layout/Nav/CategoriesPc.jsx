import { useContext } from "react";
import { Context } from "../../../context/Context";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, Text, useDisclosure } from "@chakra-ui/react";

export default function Dropdown() {
  
  const {setCurrentPage} = useContext(Context)

  const { isOpen, onToggle } = useDisclosure()

  return (
    <Menu isOpen={isOpen}>
      <MenuButton onClick={onToggle} >
        <Text>
          CATEGORIES{" "}
          <i className={isOpen === false ? "bi bi-caret-down" : "bi bi-caret-up"}></i>{" "}
        </Text>
      </MenuButton>
      <MenuList flexDirection={"column"} display={"flex"}>
        <Text as={Link} to={`/Category/Smartphones/page/1`} p={2} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onToggle()}}>
          Phones
        </Text>
        <Text as={Link} to={`/Category/Tablets/page/1`} p={2} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onToggle()}}>
          Tablets
        </Text>
        <Text as={Link} to={`/Category/Laptops/page/1`} p={2} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onToggle()}}>
          Laptops
        </Text>
      </MenuList>
    </Menu>
  );
}
