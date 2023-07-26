import { Logo } from "../Logo";
import {
    Box,
    Link,
    SimpleGrid,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export function Footer() {
    return (
      <Box
      p={{base:"3", sm:"10"}}
      mt={"auto"}
      bg={"#f7f7f7"}
        >
          <Container maxW={"8xl"}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Chakra Templates. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
              <i className="bi bi-twitter" style={{fontSize:"20px", color:"rgb(0,120,200)"}}></i>
              <i className="bi bi-facebook" style={{fontSize:"20px", color:"rgb(0,50,120)"}}></i>
              <i className="bi bi-youtube" style={{fontSize:"20px", color:"rgb(200,0,0)"}}></i>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={"medium"} fontSize={"xl"}>Company</Text>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text fontWeight={"medium"} fontSize={"xl"}>Support</Text>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text fontWeight={"medium"} fontSize={"xl"}>Contact me</Text>
              <Stack flexDirection={'column'}>
              <Text fontWeight={"medium"} wordBreak={"break-word"}>Email: arrieta21@gmail.com</Text>
              <Text fontWeight={"medium"} >Phone: +506 6354-4534</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
          </Container>
      </Box>
    );
  }