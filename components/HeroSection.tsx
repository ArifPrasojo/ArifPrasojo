"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-indigo-100 px-4 py-1.5 text-sm font-medium mb-8 bg-indigo-50/50 text-indigo-700 backdrop-blur-sm"
        >
          <Zap className="w-4 h-4 mr-2 fill-indigo-600" />
          <span>New: Gemini 2.0 Integration</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-gray-900 leading-[1.1]"
        >
          Pahami Dokumen <br />
          <span className="text-gradient">dalam Sekejap</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
        >
          Ubah file PDF, Word, dan Teks yang membosankan menjadi ringkasan cerdas yang bisa Anda ajak bicara. Hemat waktu, pahami lebih banyak.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20"
        >
          <Link
            href="/dashboard"
            className="group relative inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Mulai Gunakan Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl transition-all shadow-sm hover:shadow-md"
          >
            Cara Kerja
          </Link>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          id="features"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          <div className="glass-morphism p-8 rounded-3xl text-left hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Format Support</h3>
            <p className="text-gray-600 leading-relaxed">Mendukung PDF, DOCX, dan TXT. Apapun dokumennya, kami bisa membacanya untuk Anda.</p>
          </div>
          
          <div className="glass-morphism p-8 rounded-3xl text-left hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-200">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Ringkasan Instan</h3>
            <p className="text-gray-600 leading-relaxed">Dapatkan poin-poin penting dalam hitungan detik. Sempurna untuk riset cepat dan belajar.</p>
          </div>

          <div className="glass-morphism p-8 rounded-3xl text-left hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Privasi Terjamin</h3>
            <p className="text-gray-600 leading-relaxed">Dokumen Anda aman. Tidak ada data yang disimpan secara permanen di mode Tamu.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
