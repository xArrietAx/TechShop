import { Link } from "react-router-dom";
import Menu from "./CategoriesMobile";
import { useRef, useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { Context } from "../../../context/Context";

export function Mobile() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {setCurrentPage} = useContext(Context)

  const btnRef = useRef();

  return (
    <>
      <Box onClick={onOpen} fontSize={"2xl"} cursor={"pointer"} display={{base:"block", lg:"none"}}>
        <i className="bi bi-list"></i>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display={"flex"} justifyContent={"space-between"}>
            <Text>MENU</Text>
            <Box cursor={"pointer"}>
              <i className="bi bi-x-lg" onClick={onClose}></i>
            </Box>
          </DrawerHeader>

          <DrawerBody display={"flex"} flexDirection={"column"}>
            <Text
              as={Link}
              to={"/"}
              p={3}
              cursor={"pointer"}
              rounded={"lg"}
              _hover={{ bg: "gray.100" }}
              onClick={onClose}
            >
              HOME
            </Text>

            <Text
              as={Link}
              to={`/All_products/page/1`}
              p={3}
              cursor={"pointer"}
              rounded={"lg"}
              _hover={{ bg: "gray.100" }}
            onClick={() => {setCurrentPage(1), onClose()}} 
            >
              ALL PRODUCTS
            </Text>

            <Text
              as={Link}
              to={"/My_cart"}
              p={3}
              cursor={"pointer"}
              rounded={"lg"}
              _hover={{ bg: "gray.100" }}
              onClick={onClose}
            >
              MY CART
            </Text>

            <Menu onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
