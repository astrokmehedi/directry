import Image from 'next/image';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The SaaS Paradox: Why More Tools Might Be Slowing You Down',
    category: 'Analysis',
    date: 'Oct 24, 2023',
    excerpt: 'How businesses can audit their current software stack to eliminate friction and reduce unnecessary costs...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbPmOqoJ5XvWux5KGEUqYD-L-o9ohyvQoS9nnULupi018mWA57ISHa98wjVb3UyNZsv2dvgrE1EAJVucz_BJszaBxrXMhs-kGboaLN8Acx3PwAOCUi6OHQ1go5zGISmLSmSwBGqeSjDJEWLn4WspKxfci-aDT9gtJb9J4_Rw7pvE873TWGZmZoyQZ41H1v94Tgqv_rc9nckwsAEqrhx7XGUDGkAZSD_fU5egB-on-BgBUXiVkmUT4l3xsYbMu7w7OD3U_a4IfR-x-H'
  },
  {
    id: 2,
    title: 'How to Pitch Your AI Startup to Top Tier Silicon Valley Investors',
    category: 'Funding',
    date: 'Oct 20, 2023',
    excerpt: 'Insights from 10 leading VCs on what they actually look for in seed-stage pitch decks this year...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClIlYKS4xlLeJYJc4PnohaF-4yTEXMfdFMgD-hJH-mfUSVe6O7WDlR3JSD0pk8vHDnG62Q2NH5cC80NDsJ_OapkEzcZAuHYnOyqvWqCZv76_Fk_GGPsJAkj0kJktrt86UnnmPLFsUEL8Pm8zoKtf0Gs8nFbVz0KfPx6T0D-Iitcu8VIKNsMwUp9k7Vk7cFUKS_IbF5LzhE9lUwHfdCb_borfgCV_W84DSZ0_3mTubSzfe2wMSenLHJsjk9JvkiEqPOWyVMItZnEQi9'
  },
  {
    id: 3,
    title: 'Top 12 Remote-First Collaboration Tools Every Manager Needs',
    category: 'Productivity',
    date: 'Oct 15, 2023',
    excerpt: 'Moving beyond Slack and Zoom—these tools are redefining how high-performance distributed teams operate...',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq1HcWS9jRSDkKzD6T-5dC9qrR-qFLow1_o9j5Bx8e0tp9csJDVNbXSEjuaEokPsCqFI1rN_VKSGNls-eUaHd1C3vUYzerUHg2H7tCbttlUSiV0gZB8CCb8hwOO3APANzZSjdH6srg25wjXP9L_t_gQIHXwfKKMFiLaZ0sAwalIV5eig2S1x0D_-3qJyhM1rbWL5FpsV2KKjcshmrBfUSxL4zAFUsbaghuBnp5MIWXiuQpsQcNdLUfI6_KELu1Q-QAv6DbN7E-Df5-'
  }
];

export function BlogPreview() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-2 text-on-surface">From the Foundry Blog</h2>
          <p className="text-on-surface-variant">Expert takes on the evolving landscape of business technology.</p>
        </div>
        <Link href="#" className="text-primary font-bold hover:underline">Read all posts</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-surface-container relative">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-3 text-xs font-bold text-on-surface-variant tracking-wider uppercase">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-outline rounded-full"></span>
              <span>{post.date}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 font-headline group-hover:text-primary transition-colors leading-tight text-on-surface">
              {post.title}
            </h3>
            
            <p className="text-on-surface-variant text-sm line-clamp-2">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
