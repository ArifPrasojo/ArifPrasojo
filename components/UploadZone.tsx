"use client";

import { useState, useCallback } from "react";
import { UploadCloud, File, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const uploadFile = async (file: File) => {
    if (!file) return;
    
    // Check file size (max 20MB)
    if (file.size > 20 * 1024 * 1024) {
      setError("Ukuran file maksimal 20MB");
      return;
    }

    // Check file type
    const validTypes = [
      "application/pdf", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
      "text/plain"
    ];
    
    if (!validTypes.includes(file.type)) {
      setError("Hanya format PDF, DOCX, dan TXT yang didukung");
      return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal mengunggah dokumen");
      }

      const data = await res.json();
      router.push(`/document/${data.documentId}`);
      router.refresh(); // Refresh history in dashboard if they navigate back
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan yang tidak terduga");
      setIsUploading(false);
    }
  };

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadFile(e.dataTransfer.files[0]);
    }
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`relative flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-2xl transition-all duration-200 ease-in-out ${
          isDragging 
            ? "border-indigo-500 bg-indigo-50/50 scale-[1.02]" 
            : "border-gray-200 hover:border-indigo-400 hover:bg-gray-50"
        } ${isUploading ? "pointer-events-none opacity-70" : ""}`}
      >
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={onFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center text-indigo-500">
            <Loader2 className="w-12 h-12 mb-4 animate-spin" />
            <p className="text-lg font-medium">Memproses dokumen...</p>
            <p className="text-sm text-gray-500 mt-2">Mohon tunggu sebentar</p>
          </div>
        ) : (
          <>
            <div className="w-16 h-16 mb-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tarik & Lepas file Anda di sini
            </h3>
            <p className="text-gray-500 mb-6 text-center max-w-md">
              Atau klik untuk memilih file dari komputer Anda. <br />
              Mendukung PDF, DOCX, dan TXT (Maks. 20MB)
            </p>
            <button className="px-6 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Pilih File
            </button>
          </>
        )}
      </div>
      
      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-600 flex items-start text-sm border border-red-100 animate-in fade-in slide-in-from-top-2">
          <File className="w-5 h-5 mr-2 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
