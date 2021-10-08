import { Box, Flex } from "@chakra-ui/react";
import { Container } from './Container';
import { BackLink } from "./BackLink";
import { Logo } from './Logo'

interface HeaderProps {
  home?: boolean;
}

export function Header({ home = false }: HeaderProps) {
  return (
    <Box as="header" h={{ base: 12, sm: 20 }}>
      <Container h={'100%'}>
        <Flex 
          align="center" 
          justify="center" 
          h={'100%'}
          pos='relative'
        >
          { !home && <BackLink href='/' boxSize={{ base: 4, sm: 8 }} />}
          <Logo h={{ base: 5, sm: 12 }} />
        </Flex>
      </Container>
    </Box>
  )
}