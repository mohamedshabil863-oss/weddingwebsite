"use client"

import { StarIcon, HeartIcon } from "./icons"
import { FloralDecoration } from "./floral-decoration"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative bg-cream-primary overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(201, 162, 39, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(13, 77, 58, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(201, 162, 39, 0.03) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Decorative top border with ornament */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-2 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-deep/30 to-transparent mt-1" />
      </div>
      
      {/* Corner floral decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-heart absolute top-1/4 left-1/4 text-gold-primary/10">
          <HeartIcon className="w-8 h-8" />
        </div>
        <div className="floating-heart absolute top-1/3 right-1/4 text-emerald-deep/10" style={{ animationDelay: '1s' }}>
          <HeartIcon className="w-6 h-6" />
        </div>
        <div className="floating-heart absolute bottom-1/3 left-1/3 text-gold-primary/10" style={{ animationDelay: '2s' }}>
          <HeartIcon className="w-10 h-10" />
        </div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Bismillah with decorative frame */}
        <div className="mb-10 animate-fade-in">
          <div className="inline-block relative">
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-gold-primary" />
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-l from-transparent to-gold-primary" />
            <p 
              className="font-serif text-emerald-deep tracking-widest px-4"
              style={{ direction: 'rtl', fontSize: '1.6em' }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>
        </div>
        
        {/* Ornamental divider */}
        <div className="ornament-enhanced mb-10 animate-fade-in animate-delay-1">
          <div className="ornament-line" />
          <StarIcon className="text-gold-primary w-5 h-5 gold-shimmer" />
          <div className="ornament-line" />
        </div>
        
        {/* Wedding Invitation Text */}
        <p className="font-sans text-emerald-rich text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in animate-delay-1">
          Together with their families
        </p>
        
        {/* Couple Names */}
        <div className="animate-fade-in animate-delay-2 mb-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-emerald-deep mb-2"
            style={{ 
              fontFamily: 'var(--font-script), cursive',
              lineHeight: 1.3,
              textShadow: '2px 2px 4px rgba(201, 162, 39, 0.15)'
            }}
          >
            Mohammed Shafi
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-primary" />
            <span 
              className="text-gold-primary text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-script), cursive' }}
            >
              &
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-primary" />
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-emerald-deep"
            style={{ 
              fontFamily: 'var(--font-script), cursive',
              lineHeight: 1.3,
              textShadow: '2px 2px 4px rgba(201, 162, 39, 0.15)'
            }}
          >
            Naseefa
          </h1>
        </div>
        
        {/* Invitation text */}
        <p className="font-serif text-emerald-rich text-lg md:text-xl tracking-wide mb-10 animate-fade-in animate-delay-3 max-w-lg mx-auto font-light italic">
          Request the pleasure of your company at their wedding celebration
        </p>
        
        {/* Date Card */}
        <div className="animate-fade-in animate-delay-4">
          <div className="inline-block relative">
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold-primary" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold-primary" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold-primary" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold-primary" />
            
            <div className="px-12 py-6 bg-cream-light/80 backdrop-blur-sm shadow-lg">
              <p className="font-sans text-gold-dark text-xs tracking-[0.4em] uppercase mb-2">
                Save the Date
              </p>
              <p className="font-serif text-3xl md:text-4xl text-emerald-deep tracking-wider">
                April 13, 2026
              </p>
              <p className="font-sans text-emerald-rich text-sm mt-2 tracking-wide">
                Sunday
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="flex flex-col items-center gap-2">
          <p className="font-sans text-gold-primary/60 text-xs tracking-widest uppercase">Scroll</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold-primary">
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-deep/30 to-transparent mb-1" />
        <div className="h-2 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
      </div>
    </section>
  )
}
