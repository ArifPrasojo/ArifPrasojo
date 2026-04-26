import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass-morphism border-b border-white/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">SummAIrize</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#features" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">Fitur</Link>
          <Link href="#how-it-works" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">Cara Kerja</Link>
          <Link href="/dashboard" className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">Dashboard</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="hidden sm:block text-sm font-bold bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-[0_10px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] hover:-translate-y-0.5">
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}
