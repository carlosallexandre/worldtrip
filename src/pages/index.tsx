import { GetStaticProps } from 'next';

import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Continent } from '../types';

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header home />
      <Banner />
      <TravelTypes />
      <ContinentsSlide continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/continents')
  const continents: Continent[] = await response.json();

  return {
    props: { continents },
    revalidate: 1 * 10 * 60, // 10min
  }
}
