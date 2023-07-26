import { useMediaQuery } from "@chakra-ui/react";
import { Mobile } from "./Mobile";
import { PC } from "./PC";

export const Nav = () => {
  
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  return <>{isLargerThan992 ? <PC /> : <Mobile />}</>;
}