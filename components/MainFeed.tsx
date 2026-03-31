import { TOOLS } from '@/lib/data';
import { ToolCard } from './ToolCard';
import { Filter } from 'lucide-react';

export function MainFeed() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex gap-8 overflow-x-auto pb-2 scrollbar-hide border-b border-outline-variant/20">
          <button className="text-on-surface font-bold whitespace-nowrap relative after:absolute after:bottom-[-9px] after:left-0 after:w-full after:h-[2px] after:bg-primary">Featured</button>
          <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Latest</button>
          <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Trending</button>
          <button className="text-on-surface-variant font-medium whitespace-nowrap hover:text-on-surface transition-colors">Most Upvoted</button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded text-sm font-medium border border-outline-variant/10 text-on-surface hover:bg-surface-container-highest transition-colors">
          <Filter className="w-5 h-5" />
          Advanced Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {TOOLS.slice(0, 9).map((tool) => (
          <ToolCard key={tool.id} tool={tool} view="grid" />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all rounded-md">
          Load More Tools
        </button>
      </div>
    </section>
  );
}
