import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <Navbar />
      
      <main className="flex-grow relative z-10">
        <HeroSection />

        {/* How it Works Section */}
        <section id="how-it-works" className="py-24 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara Kerja SummAIrize</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Tiga langkah mudah untuk memahami dokumen ribuan kata dalam sekejap.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-indigo-100 -z-10" />
              
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-6 border border-indigo-50 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unggah Dokumen</h3>
                <p className="text-gray-600">Seret dan lepaskan file PDF, Word, atau teks Anda ke dashboard kami.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-6 border border-indigo-50 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Analisis AI</h3>
                <p className="text-gray-600">Gemini 1.5 Flash akan memproses dan memahami seluruh isi konten Anda.</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-indigo-600 shadow-xl shadow-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dapatkan Hasil</h3>
                <p className="text-gray-600">Terima ringkasan atau tanya jawab langsung dengan asisten cerdas kami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-pink-500 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000" />
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Siap Menghemat Waktu Anda?</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Gunakan kecerdasan AI untuk membantu tugas pembacaan dokumen Anda sekarang juga.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link href="/dashboard" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:scale-105">
                  Mulai Gunakan Sekarang
                </Link>
                <div className="px-8 py-4 border border-indigo-400 bg-indigo-500/30 backdrop-blur-sm text-white font-medium rounded-xl">
                  Akses Terbuka & Cepat
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-16 z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">SummAIrize</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Platform ringkasan dokumen bertenaga AI tercepat dan tercanggih. Dirancang untuk membantu Anda memahami informasi kompleks dalam sekejap.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Navigasi</h4>
              <ul className="space-y-4">
                <li><Link href="#features" className="text-gray-500 hover:text-indigo-600 transition-colors">Fitur</Link></li>
                <li><Link href="#how-it-works" className="text-gray-500 hover:text-indigo-600 transition-colors">Cara Kerja</Link></li>
                <li><Link href="/dashboard" className="text-gray-500 hover:text-indigo-600 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} SummAIrize AI. Built for the future of reading.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Indonesia</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
