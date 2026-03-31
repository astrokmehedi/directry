import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { SponsoredTools } from '@/components/SponsoredTools';
import { MainFeed } from '@/components/MainFeed';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BlogPreview } from '@/components/BlogPreview';
import { BottomCTA } from '@/components/BottomCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <StatsBar />
        <CategoryGrid />
        <SponsoredTools />
        <MainFeed />
        <WhyChooseUs />
        <BlogPreview />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
