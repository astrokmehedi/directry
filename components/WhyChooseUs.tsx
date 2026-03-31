import { ShieldCheck, Handshake, BarChart3 } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-low/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-16">
        <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 text-on-surface">Why Businesses Trust Foundry</h2>
        <div className="w-12 h-1 bg-primary mx-auto"></div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto mb-6 editorial-shadow">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-4 font-headline text-on-surface">Verified Reviews</h3>
          <p className="text-on-surface-variant leading-relaxed">Every tool and review is manually vetted by our team of software experts to ensure quality and authenticity.</p>
        </div>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto mb-6 editorial-shadow">
            <Handshake className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-4 font-headline text-on-surface">Investor Matching</h3>
          <p className="text-on-surface-variant leading-relaxed">Get your product in front of 500+ active VCs and Angel investors looking for their next high-growth startup.</p>
        </div>
        
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto mb-6 editorial-shadow">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-4 font-headline text-on-surface">Deep Insights</h3>
          <p className="text-on-surface-variant leading-relaxed">Detailed stack analysis and comparative data points to help you make informed decisions about your tech stack.</p>
        </div>
      </div>
    </section>
  );
}
