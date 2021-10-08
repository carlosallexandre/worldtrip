import NextLink from 'next/link';
import { Box, Center, Image, Link, Text, Divider, Heading } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import { Container } from './Container';
import { Continent } from '../types';

SwiperCore.use([Pagination, Navigation]);

interface ContinentsSlideProps {
  continents: Continent[];
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
  return (
    <Container
      as='section' 
      borderColor='text-dark'
      mt={[9, 20]}
      px={0}
      pb={[6, 10]}
    >
      <Divider w='60px' mx='auto' mb={[6, '3.25rem']} />

      <Heading 
        fontSize={['xl', '4xl']}
        color='text-dark'
        fontWeight='medium'
        textAlign='center'
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Box 
        as={Swiper}
        w='100%' 
        mt={[5, '3.25rem']}
        pagination={true}
        navigation={true}
      >
        {continents.map(continent => (
          <SwiperSlide 
            key={continent.name} 
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image 
              src={continent.bannerImg} 
              alt={continent.name} 
              pos="absolute"
              top={'50%'}
              left={'50%'}
              transform={"translate(-50%, -50%)"}
              maxHeight="100%"
              maxWidth="none"
              height="auto"
              width="auto"
              zIndex={-1}
            />

            <Center 
              h={['250px', '450px']} 
              w='100%'
              px={4}
              bgColor='rgba(0, 0, 0, 0.6)'
            >
              <NextLink href={`${continent.slug}`}>
                <Link 
                  textAlign='center' 
                  _hover={{ 
                    textDecoration: 'none', 
                    filter: 'brightness(0.85)' 
                  }}
                  transition='filter 400ms'
                >
                  <Text 
                    as='strong'
                    fontWeight='bold'
                    fontSize={['2xl', '5xl']}
                    color='text-light'
                  >
                    {continent.name}
                  </Text>
                  <br />
                  <Text 
                    as='span'
                    fontSize={['sm', '2xl']}
                    color='info-light'
                  >
                    {continent.summarize}
                  </Text>
                </Link>
              </NextLink>
            </Center>
          </SwiperSlide>
        ))}
      </Box>
    </Container>
  )
}