import { TOOLS } from '@/lib/data';
import { ToolCard } from './ToolCard';
import { SidebarFilters } from './SidebarFilters';
import { Filter, LayoutGrid, List } from 'lucide-react';

export function DirectorySection() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface mb-2">Browse All Tools</h2>
          <p className="text-on-surface-variant font-medium">Discover 1,248 curated resources for modern founders.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-on-surface-variant">Sort by:</span>
            <select className="bg-surface-container-lowest px-4 py-2 rounded-md border border-outline-variant/20 text-sm font-semibold text-on-surface outline-none focus:border-primary">
              <option>Latest</option>
              <option>Popular</option>
              <option>Highest Rated</option>
            </select>
          </div>
          
          <div className="hidden sm:flex border border-outline-variant/20 rounded-md p-1 bg-surface-container-lowest">
            <button className="p-1.5 rounded bg-surface-container-high text-on-surface">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <SidebarFilters />
        
        <div className="flex-grow">
          <div className="flex gap-8 overflow-x-auto pb-4 mb-6 scrollbar-hide border-b border-outline-variant/20">
            <button className="text-on-surface font-bold whitespace-nowrap relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[2px] after:bg-primary">Featured</button>
            <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Latest</button>
            <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Trending</button>
            <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Most Upvoted</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} view="grid" />
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
             <button className="px-8 py-3 bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-bold rounded-md hover:bg-surface-container-low transition-colors">
                Load More Tools
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
