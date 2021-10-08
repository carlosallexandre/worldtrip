import { Box } from "@chakra-ui/react";
import { CityCard } from "./CityCard";
import { ContinentBanner } from "./ContinentBanner";
import { ContinentDescription } from "./ContinentDescription";
import { ContinentInfo, Info } from "./ContinentInfo";
import { ContinentDescriptionContainer } from "./ContinentDescriptionContainer";
import { ContinentCities } from "./ContinentCities";
import { CitiesGrid } from "./ContinentCitiesGrid";
import { Continent } from "../types";

interface ContinentArticleProps {
  continent: Continent;
}

export function ContinentArticle({ continent }: ContinentArticleProps) {
  return (
    <Box as ="main">
      <Box as="section" mb={[9, 9, 20]}>
        <ContinentBanner img={continent.articleImg}>
          {continent.name}
        </ContinentBanner>

        <ContinentDescriptionContainer>
          <ContinentDescription>{continent.description}</ContinentDescription>

          <ContinentInfo>
            <Info number={continent.countries} description={'países'} />
            <Info number={continent.languages} description={'línguas'} />
            <Info number={continent.cities.length} description={'cidades +100'} />
          </ContinentInfo>
        </ContinentDescriptionContainer>
      </Box>

      <ContinentCities>
        <CitiesGrid>
          {continent.cities.map(city => (
            <CityCard key={city.name} city={city} />
          ))}
       </CitiesGrid>
      </ContinentCities>
    </Box>
  )
}