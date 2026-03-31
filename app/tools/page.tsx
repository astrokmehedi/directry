import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DirectorySection } from '@/components/DirectorySection';

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <DirectorySection />
      </main>
      <Footer />
    </div>
  );
}
