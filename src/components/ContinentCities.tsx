import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";
import { Container } from "./Container";

interface ContinentCitiesProps {
  children: ReactNode;
}

export function ContinentCities({ children }: ContinentCitiesProps) {
  return (
    <Container as="section" pb={[4, 4, 7]}>
      <Heading 
        as="h2"
        d="block"
        mb={[5, 5, 8]}
        fontWeight={500}
        fontSize={["2xl", "2xl", "4xl"]}
        color="text-dark"
      >
        Cidades +100
      </Heading>

        {children}
    </Container>
  )
}