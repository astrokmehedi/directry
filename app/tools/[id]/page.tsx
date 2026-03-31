import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TOOLS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { 
  Terminal, Verified, TrendingUp, ArrowUpRight, 
  Plus, Share2, Flag, Network, Database, Activity, Award,
  Star, Zap, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function ToolDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  // Find the tool by ID, or fallback to the first tool for demo purposes if not found
  const tool = (TOOLS.find(t => t.id === resolvedParams.id) || TOOLS[0]) as any;

  if (!tool) {
    notFound();
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-surface-container-highest rounded-xl flex items-center justify-center p-6 border border-outline-variant/10 shrink-0 overflow-hidden relative">
              {tool.logo ? (
                 <Image src={tool.logo} alt={tool.name} fill className="object-cover" referrerPolicy="no-referrer" />
              ) : (
                 <Icon className="w-16 h-16 text-primary" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-on-surface font-headline">{tool.name}</h1>
                {tool.verified && (
                  <span className="inline-flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary border border-outline-variant/20">
                    <Verified className="w-3.5 h-3.5 fill-primary text-surface-container-high" />
                    Verified
                  </span>
                )}
              </div>
              <p className="text-lg text-on-surface-variant max-w-xl font-medium">{tool.description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-outline-variant/30 hover:bg-surface-container-low px-6 py-4 rounded-xl transition-all group">
              <TrendingUp className="w-5 h-5 text-primary group-active:scale-125 transition-transform" />
              <span className="font-bold text-xl">{tool.upvotes.toLocaleString()}</span>
            </button>
            <button className="flex-1 md:flex-none bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-2">
              Try Now
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Gallery Section */}
            <section className="space-y-4">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-container-low relative">
                <Image 
                  src={`https://picsum.photos/seed/${tool.id}1/1200/675`} 
                  alt={`${tool.name} screenshot 1`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[2, 3, 4].map((num) => (
                  <div key={num} className="aspect-video rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:opacity-80 transition-opacity relative">
                    <Image 
                      src={`https://picsum.photos/seed/${tool.id}${num}/600/337`} 
                      alt={`${tool.name} screenshot ${num}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
              </div>
            </section>

            {/* Description */}
            <section className="prose prose-zinc max-w-none">
              <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 font-headline">
                <span className="w-8 h-[2px] bg-primary"></span>
                Overview
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed font-body">
                <p>{tool.name} provides an editorial-grade experience for developers who demand precision and clarity in their infrastructure orchestration. It bridges the gap between manual script management and over-engineered enterprise platforms, offering a "Curator" approach to system design.</p>
                <p>Built with a focus on monochromatic efficiency, the tool allows teams to visualize complex serverless dependencies through a high-contrast node editor. Every interaction is designed to minimize cognitive load, utilizing subtle tonal depth instead of distracting colors to convey state and hierarchy.</p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 list-none p-0">
                  <li className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl m-0">
                    <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-on-surface block font-bold">Zero-Latency Sync</strong> Real-time propagation of changes across your entire distributed mesh.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-container-low p-4 rounded-xl m-0">
                    <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-on-surface block font-bold">Immutable Versioning</strong> Automatic snapshots for every flow change with one-click rollbacks.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-10 flex items-center gap-2 font-headline">
                <span className="w-8 h-[2px] bg-primary"></span>
                User Reviews
              </h2>
              
              <div className="flex flex-col md:flex-row gap-12 mb-12 items-start">
                <div className="text-center p-8 bg-surface-container-low rounded-2xl w-full md:w-48 shrink-0">
                  <div className="text-5xl font-black text-on-surface mb-1 font-headline">{tool.rating > 0 ? tool.rating.toFixed(1) : '0.0'}</div>
                  <div className="flex justify-center text-primary mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={cn("w-5 h-5", star <= Math.round(tool.rating) ? "fill-primary" : "fill-transparent")} />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{tool.reviews || 142} reviews</div>
                </div>
                
                <div className="flex-1 space-y-3 w-full">
                  {[
                    { stars: 5, pct: 92 },
                    { stars: 4, pct: 6 },
                    { stars: 3, pct: 2 },
                    { stars: 2, pct: 0 },
                    { stars: 1, pct: 0 },
                  ].map((row) => (
                    <div key={row.stars} className={cn("flex items-center gap-4", row.pct === 0 && "opacity-40")}>
                      <span className="text-sm font-bold w-4">{row.stars}</span>
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${row.pct}%` }}></div>
                      </div>
                      <span className="text-xs text-on-surface-variant w-8">{row.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Review 1 */}
                <div className="p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">EK</div>
                      <div>
                        <div className="font-bold text-sm">Elena K.</div>
                        <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Senior DevOps Engineer</div>
                      </div>
                    </div>
                    <div className="flex text-primary text-sm">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm italic">"The clarity this brings to our workflows is unparalleled. Most tools try to be too colorful—this treats my code like a high-end magazine layout."</p>
                </div>
                
                {/* Review 2 */}
                <div className="p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">MJ</div>
                      <div>
                        <div className="font-bold text-sm">Marcus Jensen</div>
                        <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Fullstack Architect</div>
                      </div>
                    </div>
                    <div className="flex text-primary text-sm">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-primary" />
                      ))}
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm italic">"Finally, a tool that respects the developer's screen space. The node editor is incredibly smooth even with 50+ connections."</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Utility Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-surface-container-low hover:bg-surface-container-high rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-surface-container-low hover:bg-red-50 hover:text-red-600 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
                <Flag className="w-4 h-4" />
                Report
              </button>
            </div>

            {/* Related Tools */}
            <section>
              <h3 className="text-xs font-black text-on-surface uppercase tracking-[0.2em] mb-6">Related Tools</h3>
              <div className="space-y-4">
                <Link href="#" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-lowest transition-all border border-transparent hover:border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant/10 shrink-0">
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm group-hover:underline">EdgeMesh</div>
                    <div className="text-[11px] text-on-surface-variant">Global routing optimizer</div>
                  </div>
                </Link>
                <Link href="#" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-lowest transition-all border border-transparent hover:border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant/10 shrink-0">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm group-hover:underline">VaultCore</div>
                    <div className="text-[11px] text-on-surface-variant">Encrypted state storage</div>
                  </div>
                </Link>
                <Link href="#" className="group flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-lowest transition-all border border-transparent hover:border-outline-variant/10">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg border border-outline-variant/10 shrink-0">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm group-hover:underline">TraceLog</div>
                    <div className="text-[11px] text-on-surface-variant">Distributed observability</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Sponsored Ad */}
            <section className="bg-primary text-on-primary p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-32 h-32 transform rotate-12" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block text-on-primary/60">Sponsored</span>
                <h4 className="text-xl font-bold leading-tight mb-4 font-headline">Master your cloud budget with SpendWise.</h4>
                <p className="text-on-primary/80 text-sm mb-6">Automated cost allocation for modern engineering teams.</p>
                <button className="bg-on-primary text-primary px-6 py-2 rounded-lg text-sm font-bold hover:bg-surface-container-lowest transition-colors">
                  Learn More
                </button>
              </div>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
