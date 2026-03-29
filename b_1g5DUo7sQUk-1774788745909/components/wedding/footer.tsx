"use client"

import { StarIcon, HeartIcon } from "./icons"

export function Footer() {
  return (
    <footer className="py-16 px-4 text-center bg-emerald-deep relative overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0L25 15L40 20L25 25L20 40L15 25L0 20L15 15Z' fill='%23c9a227'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
      
      {/* Corner florals */}
      <div className="absolute top-8 left-8 text-gold-primary opacity-20 text-4xl md:text-6xl">
        ❧
      </div>
      <div className="absolute top-8 right-8 text-gold-primary opacity-20 text-4xl md:text-6xl scale-x-[-1]">
        ❧
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-primary" />
          <StarIcon className="text-gold-primary w-5 h-5 gold-shimmer" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-primary" />
        </div>
        
        {/* Message */}
        <p 
          className="text-3xl md:text-4xl text-cream-primary mb-6"
          style={{ fontFamily: 'var(--font-script), cursive' }}
        >
          {"We can't wait to celebrate with you!"}
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-primary" />
          <HeartIcon className="text-gold-primary w-6 h-6 animate-pulse" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-primary" />
        </div>
        
        {/* Couple Names */}
        <p 
          className="text-2xl text-gold-light tracking-wide mb-3"
          style={{ fontFamily: 'var(--font-script), cursive' }}
        >
          Mohammed Shafi & Naseefa
        </p>
        
        {/* Date */}
        <p className="font-sans text-cream-dark text-sm tracking-widest uppercase mb-8">
          April 13, 2026
        </p>
        
        {/* Hashtag */}
        <div className="inline-block px-6 py-3 border border-gold-primary/30 bg-emerald-rich/30">
          <p className="font-sans text-gold-primary text-sm tracking-wider">
            #ShafiWedsNaseefa
          </p>
        </div>
        
        {/* Arabic Blessing */}
        <div className="mt-12 mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-primary/50" />
            <div className="w-2 h-2 bg-gold-primary/30 rotate-45" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-primary/50" />
          </div>
          <p 
            className="text-gold-light text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: 'var(--font-amiri), serif' }}
            dir="rtl"
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="text-cream-dark/60 text-xs mt-3 italic">
            May Allah bless you both and unite you in goodness
          </p>
        </div>
        
        {/* Bottom decorative text */}
        <p className="font-serif text-cream-dark/60 text-xs mt-6 tracking-widest uppercase">
          Made with love
        </p>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute bottom-8 left-8 text-gold-primary opacity-20 text-4xl md:text-6xl rotate-180">
        ❧
      </div>
      <div className="absolute bottom-8 right-8 text-gold-primary opacity-20 text-4xl md:text-6xl rotate-180 scale-x-[-1]">
        ❧
      </div>
    </footer>
  )
}
