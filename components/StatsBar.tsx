export function StatsBar() {
  return (
    <section className="bg-primary text-on-primary py-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex justify-around items-center text-sm font-sans font-medium tracking-wide uppercase opacity-90">
        <div className="flex items-center gap-2">Total Tools: <span className="font-bold">5,000+</span></div>
        <div className="hidden sm:block w-px h-4 bg-on-primary/20"></div>
        <div className="flex items-center gap-2">Daily Visitors: <span className="font-bold">20k+</span></div>
        <div className="hidden sm:block w-px h-4 bg-on-primary/20"></div>
        <div className="flex items-center gap-2">Active Users: <span className="font-bold">100k+</span></div>
      </div>
    </section>
  );
}
