import { Star, Heart, Plus, ArrowUp, MessageCircle, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ToolCardProps {
  tool: any;
  view?: 'grid' | 'list';
}

export function ToolCard({ tool, view = 'grid' }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-4 tool-card-shadow flex flex-col relative group h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center overflow-hidden border border-zinc-100">
             {tool.logo ? (
               <Image src={tool.logo} alt="Logo" width={32} height={32} className="object-contain" referrerPolicy="no-referrer" />
             ) : (
               <Icon className="w-6 h-6 text-zinc-700" />
             )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h4 className="font-bold text-sm text-zinc-900">{tool.name}</h4>
              {tool.verified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />}
            </div>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-zinc-400">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>{tool.rating > 0 ? tool.rating.toFixed(1) : '0.0'} ({tool.reviews || 0} ratings)</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 items-end">
          <button className="text-zinc-400 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-all opacity-0 group-hover:opacity-100" title="Add to Comparison">
            <Plus className="w-3 h-3 font-bold" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {tool.tags.map((tag: string, index: number) => (
          <span key={tag} className={cn(
            "px-2 py-0.5 text-[10px] font-semibold rounded",
            index === 0 ? "bg-indigo-50 text-indigo-600" : "bg-zinc-100 text-zinc-600"
          )}>
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-zinc-500 text-[12px] line-clamp-2 mb-4 leading-relaxed">
        {tool.description}
      </p>
      
      <div className="text-[12px] font-bold text-zinc-900 mb-4 mt-auto">
        {tool.pricing || 'From $20/mo'}
      </div>
      
      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] text-zinc-500">
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{tool.upvotes || 1}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-zinc-500">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{tool.comments || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-zinc-500">
            <Eye className="w-3.5 h-3.5" />
            <span>{tool.views || 15}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">
            {tool.pricingType || 'PAID'}
          </span>
          <Link href={`/tools/${tool.id}`} className="text-blue-600 text-[11px] font-bold flex items-center hover:underline">
            Try Now <ArrowRight className="w-3 h-3 ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
