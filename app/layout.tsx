import type {Metadata} from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Foundry | The Monochromatic Curator',
  description: 'The premier directory for high-quality software, tools, and resources.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased selection:bg-surface-container-highest selection:text-on-surface" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
