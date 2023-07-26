import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import { ViewProduct } from "./ViewProduct";

export const Carrousel = ({ data }) => {

  const Settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };

  return (
    <Slider {...Settings}>
      {data.map((item) => {
        return (
          <Box key={item._id} p={6} bg={"#f9f9f9"} cursor={"pointer"}>
            <Box w={"100%"} h={"300px"} p={5}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                shadow={"md"}
                src={item.image}
              />
            </Box>
            <Box my={5}>
              <Text fontWeight={"medium"} fontSize={"xl"}>
                {item.name}
              </Text>

              <Flex justifyContent={"space-between"} mt={3}>
                <Text
                  fontSize={{ base: "md", sm: "lg" }}
                  fontWeight={"semibold"}
                  textDecoration={item.offer !== 0 && "line-through"}
                  opacity={".7"}
                >
                  {item.price} $
                </Text>
                {item.offer !== 0 && (
                  <Text
                    fontSize={{ base: "md", sm: "lg" }}
                    fontWeight={"semibold"}
                    textColor={"green.400"}
                    opacity={".7"}
                  >
                    {item.offer}$
                  </Text>
                )}
              </Flex>
            </Box>
              <ViewProduct id={item._id} w={"100%"} />
          </Box>
        );
      })}
    </Slider>
  );
};
