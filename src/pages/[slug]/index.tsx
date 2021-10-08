import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ContinentArticle } from '../../components/ContinentArticle';
import { Header } from '../../components/Header';

import { Continent } from '../../types';

interface ContinentProps {
  continent: Continent;
}

export default function ContinentPost({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name}</title>
      </Head>

      <Header />
      <ContinentArticle continent={continent} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/continents');
  const continents: Continent[] = await response.json();

  const paths = continents.map(continent => ({
    params: { slug: continent.slug }
  }))
  
  return ({
    paths: paths,
    fallback: false,
  });
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(`http://localhost:3333/continents?_embed=cities&slug=${slug}`);
  const continent: Continent = await response.json();
  
  return ({
    props: { continent: continent[0] },
  })
}