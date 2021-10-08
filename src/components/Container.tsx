import { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface ContainerProps extends BoxProps {
  children: ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <Box
      mx='auto'
      w='100%'
      maxW='container.xl'
      px={4}
      {...props}
    >{children}</Box>
  )
}