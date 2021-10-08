import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import { City } from "../types";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Box
    justifySelf="center"
      w="256px"
      borderRadius="sm"
      border="1px solid rgba(255, 186, 8, 0.5)"
      bgColor='#FFF'
    >
      <Image
        borderTopRadius="inherit" 
        w="100%" 
        h="175px" 
        mb={4}
        bgColor="info-light"
        src={city.img}
        alt={city.name}
      />

      <Flex justify="space-between" align="center" mb={6} px={6}>
        <Box>
          <Text 
            as="strong"
            d="block"
            mb={3}
            fontWeight={600}
            fontSize="xl"
            color="text-dark"
          >
            {city.name}
          </Text>

          <Text 
            as="span"
            fontWeight={500}
            fontSize="md"
            color="info-dark"
          >
            {city.country.name}
          </Text>  
        </Box>

        <Center 
          borderRadius="50%" 
          w="30px" 
          h="30px" 
          overflow="hidden" 
          fontSize={"40px"}
        >
          <ReactCountryFlag 
            countryCode={city.country.code} 
            svg 
            style={{
              maxWidth: "unset"
            }}
          />
        </Center>
      </Flex>
    </Box>
  );
}