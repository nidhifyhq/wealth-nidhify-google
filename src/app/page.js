import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import WhyNidhify from '@/components/sections/WhyNidhify';
import Screenshots from '@/components/sections/Screenshots';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import BlogPreview from '@/components/sections/BlogPreview';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Features />
        <WhyNidhify />
        <Screenshots />
        {/* <Testimonials /> */}
        {/* <CTA /> */}
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
