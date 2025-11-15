"use client";

import React from "react";

interface MindMapNode {
  title: string;
  content: string[];
}

interface MindMapProps {
  title: string;
  data: MindMapNode[];
}

function MindMapNode({
  node,
  index,
  total,
}: {
  node: MindMapNode;
  index: number;
  total: number;
}) {
  const colors = [
    "from-purple-500 to-purple-600",
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-pink-500 to-pink-600",
    "from-cyan-500 to-cyan-600",
    "from-emerald-500 to-emerald-600",
  ];

  const colorClass = colors[index % colors.length];

  return (
    <div className="flex flex-col items-center relative">
      {/* Main Branch Node */}
      <div
        className={`relative bg-gradient-to-br ${colorClass} text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px] max-w-[280px] z-10`}
      >
        <h3 className="font-bold text-lg text-center">{node.title}</h3>
      </div>

      {/* Branch Line */}
      {node.content.length > 0 && (
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-400 to-gray-300 mt-1"></div>
      )}

      {/* Child Nodes Container */}
      {node.content.length > 0 && (
        <div className="relative flex flex-wrap justify-center gap-3 mt-2 pt-2">
          {/* Horizontal connector line for multiple children */}
          {node.content.length > 1 && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] h-0.5 bg-gray-300 hidden md:block"></div>
          )}
          {node.content.map((item, itemIdx) => (
            <div key={itemIdx} className="flex flex-col items-center relative">
              {/* Vertical connector line */}
              <div className="w-0.5 h-4 bg-gray-300 mb-1"></div>
              {/* Child Node */}
              <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[150px] max-w-[200px] relative z-10">
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MindMap({ title, data }: MindMapProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-8 overflow-x-auto">
      <div className="min-w-full">
        {/* Root Node (Title) */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl px-8 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              {title}
            </h2>
          </div>
        </div>

        {/* Main Branch Line */}
        <div className="flex justify-center mb-8">
          <div className="w-0.5 h-12 bg-gradient-to-b from-gray-600 to-gray-400"></div>
        </div>

        {/* Branch Nodes Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {data.map((node, index) => (
            <MindMapNode
              key={index}
              node={node}
              index={index}
              total={data.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
