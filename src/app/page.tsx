import {
  HomeHero,
  HomeTrustStrip,
  HomeWhyUs,
  HomeFeatured,
  HomeTypes,
  HomeSteps,
  HomeTestimonials,
  HomeFaq,
  HomeCtaBand,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <HomeWhyUs />
      <HomeFeatured />
      <HomeTypes />
      <HomeSteps />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCtaBand />
    </>
  );
}