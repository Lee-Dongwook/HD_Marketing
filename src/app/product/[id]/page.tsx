"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: productData, isLoading } = useQuery<any[]>({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("id", id);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="relative z-10 w-full flex flex-col gap-6 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {productData?.[0]?.title}
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
          {productData?.[0]?.content}
        </p>
      </div>
    </main>
  );
}
