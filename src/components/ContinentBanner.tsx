import { Box, Image, Heading } from '@chakra-ui/react';
import { Container } from './Container';

interface ContinentBannerProps {
  children: string;
  img: string;
}

export function ContinentBanner({ children, img }: ContinentBannerProps) {
  return (
    <Box
      bgColor="rgba(0, 0, 0, 0.4)"
      width="100%"
      height={["150px", "150px", "500px"]}
      mb={[6, 6, 20]}
      position="relative"
      overflow="hidden"
    > 
      <Image 
        src={img}
        alt={children}
        pos="absolute"
        top={'50%'}
        left={'50%'}
        transform={"translate(-50%, -50%)"}
        zIndex={-1}
      />

      <Container 
        position="absolute" 
        w="100%" 
        h="100%" 
        left="50%" 
        transform="translateX(-50%)"
      >
        <Heading 
          as="h1"
          fontWeight={600}
          fontSize={{ base: "1.75rem", md: "5xl" }}
          color="text-light"
          d="block"
          position="absolute"
          bottom={{ base: "50%", md: '60px' }}
          left={{ base: "50%", md: 4 }}
          transform={{ base: "translate(-50%, 50%)", md: "translate(0)" }}
          transition="bottom 0.3s, left 0.3s, transform 0.3s"
        >
          {children}
        </Heading>
      </Container>
    </Box>
  )
}