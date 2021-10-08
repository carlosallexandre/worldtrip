import { cloneElement, ReactElement } from "react";
import { Stack, StackProps, SimpleGrid, Text } from "@chakra-ui/layout";
import { BuildingIcon, CocktailIcon, EarthIcon, MuseumIcon, SurfIcon } from "./Icons";
import { Container } from "./Container";

interface TravelTypeProps extends StackProps {
  icon: ReactElement;
  type: string;
}

function TravelType({ icon, type, ...props }: TravelTypeProps) {
  return (
    <Stack align='center' {...props}>
      {cloneElement(
        icon, {
          color: 'hightlight', 
          boxSize: ['2rem', '3rem', '4rem', '5rem'],
          mb: [1, 2, 4, 6]
        }
      )}
      <Text 
        as='span'
        fontSize={['sm', 'lg', 'xl', '2xl']}
        fontWeight='medium'
        color="text-dark"
      >
        {type}
      </Text>
    </Stack>
  )
}

export function TravelTypes() {
  const types = [
  { type: 'vida noturna', icon: <CocktailIcon /> },
  { type: 'praia', icon: <SurfIcon /> },
  { type: 'moderno', icon: <BuildingIcon /> },
  { type: 'clássico', icon: <MuseumIcon /> },
    { type: 'e mais...', icon: <EarthIcon /> }
  ]

  return (
    <Container as='section' mt={{ base: 6, lg: 28 }}>
      <SimpleGrid columns={{ base: 2, sm: 5, md: 5 }} rows={'auto'} spacingY={6}>
        {types.map((travelType, index) => {
          const gridColumn = index * 2 + 1;
          const gridColumnStart = gridColumn <= 5 ? gridColumn : gridColumn - 5;
          const gridRowStart = gridColumn <= 5 ? 1 : 2;

          return (
            <TravelType 
              key={travelType.type} 
              {...travelType} 
              gridColumnStart={{ 
                base: 'auto', 
                sm: gridColumnStart, 
                md: 'auto' 
              }}
              gridRow={{ 
                base: 'auto', 
                sm: gridRowStart, 
                md: 'auto' 
              }}
              _last={{
                gridColumn: ['span 2', gridColumnStart, 'auto']
              }}
            />
          )
        }
        )}
      </SimpleGrid>
    </Container>
  )
}
