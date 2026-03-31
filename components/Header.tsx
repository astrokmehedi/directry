import Link from 'next/link';

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-16 px-6 lg:px-12 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-on-surface font-headline">
            Foundry
          </Link>
          <div className="hidden md:flex items-center gap-6 font-headline font-semibold tracking-tight">
            <Link href="#" className="text-on-surface border-b-2 border-on-surface pb-1">Directory</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Investors</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Resources</Link>
            <Link href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
            Login
          </button>
          <button className="px-5 py-2 bg-primary text-on-primary text-sm font-semibold rounded-md transition-all hover:bg-primary-dim active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
