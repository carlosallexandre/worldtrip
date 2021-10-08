export type Continent = {
  slug: string;
  name: string;
  summarize: string;
  bannerImg: string;
  articleImg: string;
  description: string;
  countries: number;
  languages: number;
  cities: City[];
};

export type City = {
  name: string;
  country: {
    name: string;
    code: string;
  };
  img: string;
}