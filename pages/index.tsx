import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Circle, Container, Flex, Heading, Image, List, ListIcon, ListItem, Spacer, Square, Stack, Text } from '@chakra-ui/react'

import { FaCheckCircle } from "react-icons/fa";
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Price UI With Chakra UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Flex direction={{ base: 'column', lg: 'column' }}>
          <Box height="50vh" w="100%" bg="#6B46C1"></Box>
          <Box height="50vh" w="100%" bg="#fff"></Box>
        </Flex>
        <Container>
          <Box position={{ base: 'absolute', lg: 'fixed' }} zIndex="2" left={{base:"3",lg:"72"}} top={[14,0,24]}>
            <Center>
              <Heading color="white" pb="4">
                Simple pricing for your business
          </Heading>
            </Center>
            <Center>
              <Text color="white" pb="8">Plans that are carefully crafted to suit your business.</Text>
            </Center>
            <Card
              direction={{ base: 'column', lg: 'row' }}
              overflow='hidden'
              variant='outline'
              w={['96%','100%','100%']}


            >
              <Stack p="2" pb="4" bg="#F0EAFB" w={['100%','40%','40%']}>
                <CardBody>
                  <Center>
                    <Text
                      fontSize="16"
                      fontWeight="bold"
                    >Premium Pro</Text>
                  </Center>
                  <Center>
                    <Heading
                      pt="2"
                    >$329</Heading>
                  </Center>
                  <Center>
                    <Text
                      fontSize="small"
                      pt="1"
                      pb="3"
                    >billed just once</Text>
                  </Center>
                  <Center>
                    <Button colorScheme='purple'>Get Started</Button>
                  </Center>
                </CardBody>
              </Stack>

              <Stack>
                <CardBody>

                  <Text py='2' px="4">
                    Access these features when you get this pricing package for your business.
                  </Text>
                  <List pl="4" pb="4" spacing={3}>
                    <ListItem fontSize="small">
                      <ListIcon as={FaCheckCircle} color='#652CD3' />
                      International calling and messaging API
                    </ListItem>

                    <ListItem fontSize="small">
                      <ListIcon as={FaCheckCircle} color='#652CD3' />
                      Additional phone numbers
                    </ListItem>
                    <ListItem fontSize="small">
                      <ListIcon as={FaCheckCircle} color='#652CD3' />
                      Automated messages via Zapier
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem fontSize="small">
                      <ListIcon as={FaCheckCircle} color='#652CD3' />
                      24/7 support and consulting
                    </ListItem>
                  </List>
                </CardBody>

              </Stack>
            </Card>
          </Box>

          <Flex position={{base:"absoulte",lg:"fixed"}} direction={{ base: 'column', lg: 'row' }} w={['100%',"80%"]} bottom={["0","20"]} mt={{base:"6",lg:"1"}} left="36" justifyContent="space-around">
            <Flex pb={{base:'6'}}>
              <Image
                src='/guardstar.png'
                alt='guard star icon'
              />
              <Text w={['-moz-fit-content',"-webkit-fill-available"]} pl="3" pt="0.5" fontWeight="bold" fontSize="small">
                30 days money back  Guarantee
              </Text>
            </Flex>

            <Flex pb={{base:'6'}}>
              <Image
                src='/pricetagstar.png'
                alt='guard star icon'
              />
              <Text w="-webkit-fill-available" pl="3" pt="0.5" fontWeight="bold" fontSize="small">
                No setup fees 
                100% hassle-free
              </Text>
            </Flex>

            <Flex>
              <Image
                src='/roundcircle.png'
                alt='guard star icon'
              />
              <Text w="-webkit-fill-available" pl="3" pt="0.5" fontWeight="bold" fontSize="small">
                No monthly subscription
                Pay once and for all
              </Text>
            </Flex>
          </Flex>
        </Container>

      </Box>
    </>
  )
}
