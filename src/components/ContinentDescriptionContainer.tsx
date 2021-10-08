import { ReactNode } from "react";
import { Container } from "./Container";

interface ContinentDescriptionContainerProps {
  children: ReactNode;
}

export function ContinentDescriptionContainer(
  { children }: ContinentDescriptionContainerProps
) {
  return (
    <Container
      d={{ base: 'block', lg: 'flex' }}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {children}
    </Container>
  )
}