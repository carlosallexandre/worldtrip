import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

interface ContinentDescriptionProps {
  children: ReactNode;
}

export function ContinentDescription({ children }: ContinentDescriptionProps) {
  return (
    <Text
      as="p"
      fontWeight={400}
      fontSize={{ base: "sm", md: "2xl"}}
      align="justify"
      color="text-dark"
      mb={{ base: 4, lg: 0 }}
      maxW={{ base: "unset", lg: "600px" }}
    >
      {children}
    </Text>
  )
}