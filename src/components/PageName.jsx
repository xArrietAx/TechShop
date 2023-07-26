import {Text, Divider} from '@chakra-ui/react'

export const PageName = ({name}) => {
  return (
   <>
    <Text
    as={"span"}
    mb={5}
    fontSize={{ base: "xl", sm: "2xl", "2xl":"3xl" }}
    fontWeight={"semibold"}
    textAlign={"center"}
  >
    {name}
  </Text>
  <Divider />
   </>
  )
}
