import { Helmet } from "react-helmet-async";
import { profile } from "@/data/site";

type PageSeoProps = {
  title: string;
  description: string;
};

export const PageSeo = ({ title, description }: PageSeoProps) => (
  <Helmet>
    <title>{`${title} | ${profile.name}`}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | ${profile.name}`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);
