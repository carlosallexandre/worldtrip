import { ReactNode } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface ContinentInfoProps {
  children: ReactNode;
}

export function ContinentInfo({ children }: ContinentInfoProps) {
  return (
    <Flex 
      justify={["space-between", "space-between", "space-between", "unset"]} 
      gridGap={[0, 0, 0, 12]}
    >
      {children}
    </Flex>
  )
}

interface InfoProps {
  number: number;
  description: string;
}

export function Info({ number, description }: InfoProps) {
  return (
    <Box>
      <Text 
        as="strong"
        d="block"
        fontWeight={600}
        fontSize={{ base: "2xl", md: "5xl" }}
        color="hightlight"
      >
        {number}
      </Text>
      <Text 
        as="span"
        fontWeight={400}
        fontSize={{ base: "lg", md: "2xl" }}
        color="text-dark"
      >
        {description}
      </Text>
    </Box>
  )
}