import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { Container } from './Container';
import { AirplaneIcon } from "./Icons";

import bannerImg from '../assets/background.png'

export function Banner() {
  const shouldDisplay = useBreakpointValue({ base: 'none', lg: 'flex-inline'})
  
  return (
    <Box
      as='section'
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor='#011B31'
      backgroundImage={`url(${bannerImg.src})`}
    >
      <Container>
        <Flex
          justify='space-between'
          align='center'
          pos='relative'
          h='100%'
        >
          <Box maxW='524px' mt={{ base: 7, sm: 20 }} mb={{ base: 7, sm: '70px'}}>
            <Heading
            color='text-light' 
            fontSize={{ base: 'xl', sm: '4xl' }} 
            lineHeight={{ base: '7', sm: '3.375rem' }}
            fontWeight='500'
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>

            <Text 
              color='info-light' 
              pt={{ base: 2, sm: 5 }} 
              fontSize={{ base: 'sm', sm: 'xl' }} 
              lineHeight={{ base: 5, sm: '1.875rem' }}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Box display={shouldDisplay}>
            <AirplaneIcon pos='absolute' top='76px' right='0' />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}