import Link from 'next/link';
import { Globe, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-20 mt-auto border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-[1440px] mx-auto">
        <div className="lg:col-span-2">
          <span className="font-bold text-on-surface text-xl font-headline mb-4 block tracking-tight">Foundry</span>
          <p className="text-on-surface-variant text-sm mb-6 max-w-xs leading-relaxed">
            The premium curation engine for business software and investor relationships. We connect founders with the resources they need to scale.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <Globe className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-4 font-headline">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Directory</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Investors</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Add Product</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Promotions</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-4 font-headline">Company</h4>
          <ul className="space-y-2 text-sm font-headline">
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">About</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Contact</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Terms of Service</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-4 font-headline">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Blog</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Newsletter</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Success Stories</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Affiliate</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-on-surface mb-4 font-headline">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Help Center</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Cookie Policy</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:underline decoration-on-surface-variant transition-opacity">Claim Tool</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-[1440px] mx-auto">
        <span className="text-on-surface-variant text-sm">© 2026 Foundry Directory. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-xs font-bold text-on-surface-variant tracking-wider uppercase">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> System Online
          </span>
        </div>
      </div>
    </footer>
  );
}
