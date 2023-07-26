import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Icons = () => {
  return (
    <Box display={{base:"none", lg:"block"}}>
      <Link to={"/My_cart"}>
      <i
        className="bi bi-cart"
        style={{ fontSize: "21px", cursor: "pointer" }}
      ></i>
    </Link>
    </Box>
  );
};
