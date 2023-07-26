import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

function StatsCard({title, stat, Icon}) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontSize={{base:"lg", "2xl":"xl"}} fontWeight={"medium"} isTruncated>
        <i className={Icon} style={{ marginRight: "10px", fontSize: "40px"}} />
        {title}
      </StatLabel>
      <StatNumber fontSize={{base:"lg", "2xl":"xl"}} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export function Stats() {
  return (
    <Box py={28} bg={"#f7f7f7"}>
      <Container maxW={"8xl"} p={{base:"3", sm:"10"}}>
        <chakra.h1
          mb={12}
          textAlign={"center"}
          fontSize={{base:"3xl", "2xl":"4xl"}}
          fontWeight={"bold"}
        >
          What is our company doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard 
            title={"We serve"}
            stat={"50,000 people"}
            Icon={"bi bi-people"}
          />
          <StatsCard 
            title={"In"}
            stat={"30 different countries"}
            Icon={"bi-globe-americas"}
          />
          <StatsCard 
            title={"Who speak"}
            stat={"100 different languages"}
            Icon={"bi bi-translate"}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}