import { Check } from 'lucide-react';

export function SidebarFilters() {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8">
      {/* Verification Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">Verification</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors bg-surface-container-lowest">
              <Check className="w-3.5 h-3.5 text-primary opacity-0" />
            </div>
            <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Verified Only</span>
          </label>
        </div>
      </div>
      
      {/* Category Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-on-primary" />
            </div>
            <span className="text-sm text-on-surface font-medium">DevOps (142)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors bg-surface-container-lowest">
              <Check className="w-3.5 h-3.5 text-primary opacity-0" />
            </div>
            <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Analytics (86)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors bg-surface-container-lowest">
              <Check className="w-3.5 h-3.5 text-primary opacity-0" />
            </div>
            <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Design (104)</span>
          </label>
          <button className="text-xs font-bold text-primary hover:underline mt-2">Show 12 more</button>
        </div>
      </div>

      {/* Pricing Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">Pricing Type</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors bg-surface-container-lowest">
              <Check className="w-3.5 h-3.5 text-primary opacity-0" />
            </div>
            <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Free</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-on-primary" />
            </div>
            <span className="text-sm text-on-surface font-medium">Freemium</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors bg-surface-container-lowest">
              <Check className="w-3.5 h-3.5 text-primary opacity-0" />
            </div>
            <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Paid</span>
          </label>
        </div>
      </div>
      
      {/* Platform Filter */}
      <div>
        <h3 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-4">Platform</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 rounded-md border border-outline-variant/20 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">Web</button>
          <button className="px-3 py-1.5 rounded-md border border-primary bg-primary/5 text-xs font-bold text-primary transition-colors">macOS</button>
          <button className="px-3 py-1.5 rounded-md border border-outline-variant/20 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">Windows</button>
          <button className="px-3 py-1.5 rounded-md border border-outline-variant/20 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">iOS</button>
        </div>
      </div>
    </aside>
  );
}
