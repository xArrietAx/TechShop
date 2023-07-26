import { VStack } from "@chakra-ui/react";
import {Outlet} from 'react-router-dom'
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <VStack alignItems={"normal"} minH={"100vh"} >
   <Header />
    <Outlet />
    <Footer />
    </VStack>
  )
}
