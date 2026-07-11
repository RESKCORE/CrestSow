'use client';

import React from 'react';

export default function FlipCard({ frontContent, backContent, className = '' }) {
  return (
    <div className={`group relative w-full h-full aspect-square perspective-[1000px] ${className}`}>
      <div 
        className="w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180"
        style={{ transformStyle: 'preserve-3d', transitionTimingFunction: 'cubic-bezier(0.4, 0.2, 0.2, 1)' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>
        
        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-4 text-center rounded-3xl bg-white border border-[#E5E7EB] shadow-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}
