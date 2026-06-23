import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import BrandStory from "@/components/BrandStory";
import Experience from "@/components/Experience";
import Location from "@/components/Location";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <BrandStory />
      <Experience />
      <Location />
      <CTASection />
    </>
  );
}
