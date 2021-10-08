import { Box, Flex } from "@chakra-ui/react";
import { BackLink } from "./BackLink";
import { Logo } from './Logo'

interface HeaderProps {
  home?: boolean;
}

export function Header({ home = false }: HeaderProps) {
  return (
    <Box as="header" h={{ base: 12, sm: 20 }} px={{ base: 4, lg: 0 }}>
      <Flex 
        mx='auto'
        align="center" 
        justify="center" 
        maxW={'container.lg'} 
        w='100%'
        h={'100%'}
        pos='relative'
      >
        { !home && <BackLink href='/' boxSize={{ base: 4, sm: 8 }} />}
        <Logo h={{ base: 5, sm: 12 }} />
      </Flex>
    </Box>
  )
}