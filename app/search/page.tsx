import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SidebarFilters } from '@/components/SidebarFilters';
import { ToolCard } from '@/components/ToolCard';
import { TOOLS } from '@/lib/data';
import { X } from 'lucide-react';

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-4 font-headline">Search Results for "analytics"</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-on-surface-variant font-medium">Found 24 tools</span>
            <div className="h-4 w-[1px] bg-outline-variant/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-on-surface-variant">Active filters:</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                Free
                <button className="hover:text-primary/70"><X className="w-3 h-3" /></button>
              </span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                Web
                <button className="hover:text-primary/70"><X className="w-3 h-3" /></button>
              </span>
              <button className="text-on-surface-variant hover:text-on-surface underline text-xs font-bold ml-2">Clear all</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <SidebarFilters />
          
          {/* Results Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-bold rounded-md hover:bg-surface-container-low transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
