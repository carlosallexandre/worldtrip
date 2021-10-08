import { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

interface ContinentCitiesProps {
  children: ReactNode;
}

export function CitiesGrid({ children }: ContinentCitiesProps) {
  return (
    <SimpleGrid 
      spacingY={[5, 9]}
      spacingX={9}
      minChildWidth="256px"
    >
      {children}
    </SimpleGrid>
  )
}