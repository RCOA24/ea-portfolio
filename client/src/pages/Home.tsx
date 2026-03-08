import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#131313]">
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  );
}
