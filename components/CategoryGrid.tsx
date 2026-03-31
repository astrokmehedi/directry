import { CATEGORIES } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CategoryGrid() {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div className="max-w-xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 text-on-surface">Popular Categories</h2>
          <p className="text-on-surface-variant">Browse our curated selection of industry-leading software and solutions.</p>
        </div>
        <Link href="#" className="text-primary font-semibold flex items-center gap-1 group text-sm">
          View all <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <Link 
              key={category.name} 
              href="#"
              className="group p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-xl hover:editorial-shadow transition-all text-center flex flex-col items-center justify-center"
            >
              <Icon className="w-8 h-8 mb-4 text-primary group-hover:scale-110 transition-transform stroke-[1.5]" />
              <h3 className="font-semibold text-sm text-on-surface">{category.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
