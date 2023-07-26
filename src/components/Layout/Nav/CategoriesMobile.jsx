import { useContext } from "react";
import { Context } from "../../../context/Context";
import { Text, Flex, useBoolean } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Dropdown({onClose}) {
  
  const {setCurrentPage} = useContext(Context)

  let [isOpen, setIsOpen] = useBoolean()

  function Toggle() {
    setIsOpen.toggle(() => {
      return !isOpen;
    });
  }

  return (
    <>
      <Text
        p={3}
        fontWeight={"semibold"}
        cursor={"pointer"}
        rounded={"lg"}
        _hover={{bg:"gray.100"}}
        onClick={Toggle}
      >
        CATEGORIES{" "}
        <i
          className={isOpen === false ? "bi bi-caret-down" : "bi bi-caret-up"}
        ></i>
      </Text>
      <Flex
        flexDirection={"column"}
        gap={2}
        h={isOpen === false ? "0" : "140px"}
        transition={"height .2s ease-in-out"}
        overflow={"hidden"}
      >
          <Text as={Link} to={"/Category/Smartphones/page/1"} pl={5} py={2} rounded={"lg"} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onClose()}}>
            Phones
          </Text>
          <Text as={Link} to={"/Category/Tablets/page/1"} pl={5} py={2} rounded={"lg"} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onClose()}}>
            Tablets
          </Text>
          <Text as={Link}  to={"/Category/Laptops/page/1"} pl={5} py={2} rounded={"lg"} _hover={{ bg: "gray.100" }} onClick={() => {setCurrentPage(1), onClose()}}>
            Laptops
          </Text>
      </Flex>
    </>
  );
}