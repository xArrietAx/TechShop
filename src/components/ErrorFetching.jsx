import { Text, Flex } from "@chakra-ui/react";

export const ErrorFetching = ({h}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={h}>
      <Text
        fontSize={{base:"md", xl:"lg"}}
        textColor={"red"}
        fontWeight={"semibold"}
      >
        There was an error trying to get the data! Reload the page or verify your internet.
      </Text>
    </Flex>
  );
};
