import { SPONSORED_TOOLS } from '@/lib/data';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function SponsoredTools() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-primary fill-primary" />
          <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">Sponsored Tools</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPONSORED_TOOLS.map((tool) => (
            <div key={tool.id} className="group relative bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 hover:editorial-shadow transition-all flex flex-col">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded">Premium</span>
              </div>
              
              <div className="w-12 h-12 bg-surface-container mb-4 flex items-center justify-center rounded-lg overflow-hidden relative">
                <Image 
                  src={tool.logo} 
                  alt={`${tool.name} Logo`} 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 font-headline text-on-surface">{tool.name}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow">{tool.description}</p>
              
              <button className="w-full py-2 bg-surface-container-high text-on-surface font-semibold text-sm rounded-md hover:bg-primary hover:text-on-primary transition-colors">
                Explore Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
