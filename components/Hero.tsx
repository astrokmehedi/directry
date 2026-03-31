import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-surface-container-lowest py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-container rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-tight">
          Find the Best Tools <br />for Your Business
        </h1>
        
        <div className="relative max-w-2xl mx-auto mb-8 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search for tools, categories, or investors..." 
            className="w-full h-16 pl-14 pr-6 bg-surface-container-low border-b-2 border-transparent outline-none focus:border-primary focus:bg-surface-container transition-all font-sans text-lg rounded-t-md"
          />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="text-on-surface-variant text-sm font-medium mr-2">Trending:</span>
          {['AI Agents', 'No-Code', 'CRM', 'DeFi'].map((tag) => (
            <button key={tag} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-semibold rounded-full hover:bg-primary hover:text-on-primary transition-all">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
