import { HStack, Container } from "@chakra-ui/react";
import { Icons } from "../Icons";
import { Nav } from "./Nav/Nav";
import { Logo } from "../Logo";

export const Header = () => {
  return (
   <Container maxW={"8xl"}>
     <HStack justifyContent={"space-between"} p={{base:"3", sm:"7"}}>
      <Logo />
      <Nav />
      <Icons />
    </HStack>
   </Container>
  );
}