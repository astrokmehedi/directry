export function BottomCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-primary text-on-primary rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6">Ready to list your tool?</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">Join 5,000+ businesses and start reaching thousands of active buyers and investors every single day.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-on-primary text-primary font-bold rounded-xl text-lg hover:bg-surface-container transition-all">
              Submit Your Tool
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-on-primary text-on-primary font-bold rounded-xl text-lg hover:bg-white/10 transition-all">
              Browse Directory
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
