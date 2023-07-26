import { RecommendProducts } from "../components/RecommendProducts";
import { TrendingProducts } from "../components/TrendingProducts";
import { GridSection } from "../components/GridSection";
import { Categories } from "../components/Categories";
import { Stats } from "../components/Stats";
import { Hero } from "../components/Hero";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex flexDirection={"column"} gap={50}>
      <Hero />
      <Categories />
      <TrendingProducts />
      <RecommendProducts />
      <Stats />
      <GridSection />
    </Flex>
  );
};