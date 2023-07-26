import {Flex, Spinner as TheSpinner} from '@chakra-ui/react'

export const Spinner = ({h}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={h}>
    <TheSpinner size={"lg"} />
  </Flex>
  )
}