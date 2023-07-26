import { Text, Flex, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Buttons({ setPage, Number }) {

  let { page } = useParams();

  if (Number === 1) return;
  const buttons = [];
  for (let i = 1; i <= Number; i++) {
    buttons.push(
      <Button
        key={i}
        bg={parseInt(page) === i ? "cyan.300" : "gray.100" }
        textColor={parseInt(page) === i ? "white" : null }
        shadow={"md"}
        _hover={{ opacity:.9 }}
        _active={{ shadow: "sm" }}
        onClick={() => setPage(i)}
      >
        <Text fontWeight={"semibold"}>{i}</Text>
      </Button>
    );
  }

  return <>{buttons}</>;
}

export const Pagination = ({ setPage, TotalPage }) => {
  return (
    <Flex justifyContent={"center"} gap={3} my={16}>
      <Buttons setPage={setPage} Number={TotalPage} />
    </Flex>
  );
};
