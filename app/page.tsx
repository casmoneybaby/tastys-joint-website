import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Stats from '@/components/Stats';
import OurStory from '@/components/OurStory';
import Reviews from '@/components/Reviews';
import InfoBar from '@/components/InfoBar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Dynamic import for heavy GSAP scroll components
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const Preloader = dynamic(() => import('@/components/Preloader'), { ssr: false });
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false });
const GrainOverlay = dynamic(() => import('@/components/GrainOverlay'), { ssr: false });
const BurgerBuilder = dynamic(() => import('@/components/BurgerBuilder'), { ssr: false });
const SignatureBurgers = dynamic(() => import('@/components/SignatureBurgers'), { ssr: false });

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <GrainOverlay />
      <SmoothScroll>
        <Hero />
        <Marquee />
        <BurgerBuilder />
        <SignatureBurgers />
        <Stats />
        <OurStory />
        <Reviews />
        <InfoBar />
        <CTASection />
        <Footer />
      </SmoothScroll>
    </>
  );
}
