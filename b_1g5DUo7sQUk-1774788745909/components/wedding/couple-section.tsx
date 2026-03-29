"use client"

import { StarIcon, HeartIcon } from "./icons"

export function CoupleSection() {
  return (
    <section 
      className="py-24 px-4 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #faf8f3 0%, #f5f0e6 30%, #f5f0e6 70%, #faf8f3 100%)' 
      }}
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 10L45 35L70 40L45 45L40 70L35 45L10 40L35 35Z' fill='none' stroke='%23c9a227' stroke-width='0.3' opacity='0.3'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-gold-primary text-xs tracking-[0.4em] uppercase mb-4">
            Celebrating Love
          </p>
          <h2 
            className="text-4xl md:text-5xl text-emerald-deep mb-6"
            style={{ fontFamily: 'var(--font-script), cursive' }}
          >
            The Happy Couple
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-primary" />
            <StarIcon className="text-gold-primary w-4 h-4 gold-shimmer" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-primary" />
          </div>
        </div>
        
        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Groom Card */}
          <div className="group">
            <div 
              className="bg-cream-light p-10 md:p-12 text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{ 
                border: '1px solid rgba(201, 162, 39, 0.3)',
                boxShadow: '0 10px 40px rgba(13, 77, 58, 0.08)'
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-primary/60" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold-primary/60" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold-primary/60" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-primary/60" />
              
              {/* Ornamental top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                  <path d="M0 10 Q 15 0 30 10 Q 45 20 60 10" stroke="rgba(201, 162, 39, 0.4)" strokeWidth="1" fill="none" />
                </svg>
              </div>
              
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-deep to-emerald-rich opacity-90" />
                <div className="absolute inset-1 rounded-full border border-gold-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gold-light text-4xl" style={{ fontFamily: 'var(--font-script), cursive' }}>M</span>
                </div>
              </div>
              
              <p className="font-sans text-gold-primary text-xs tracking-[0.4em] uppercase mb-4">
                The Groom
              </p>
              
              <h3 
                className="text-3xl md:text-4xl text-emerald-deep mb-6"
                style={{ fontFamily: 'var(--font-script), cursive' }}
              >
                Mohammed Shafi Rv
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-primary" />
                <HeartIcon className="text-gold-primary w-4 h-4" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-primary" />
              </div>
              
              <p className="font-serif text-emerald-rich text-base leading-relaxed">
                Son of
              </p>
              <p className="font-serif text-emerald-deep text-lg font-medium mt-1">
                Nasar Rv & Rahmath K
              </p>
              <p className="font-sans text-gold-dark text-sm mt-4 tracking-wide">
                Rayimarakkar veetil (h), Ponnani, Malappuram
              </p>
            </div>
          </div>
          
          {/* Center heart connector (visible on md+) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-16 h-16 rounded-full bg-gold-primary flex items-center justify-center shadow-lg">
              <HeartIcon className="text-cream-light w-8 h-8" />
            </div>
          </div>
          
          {/* Bride Card */}
          <div className="group">
            <div 
              className="bg-cream-light p-10 md:p-12 text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
              style={{ 
                border: '1px solid rgba(201, 162, 39, 0.3)',
                boxShadow: '0 10px 40px rgba(13, 77, 58, 0.08)'
              }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-primary/60" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold-primary/60" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold-primary/60" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-primary/60" />
              
              {/* Ornamental top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                  <path d="M0 10 Q 15 0 30 10 Q 45 20 60 10" stroke="rgba(201, 162, 39, 0.4)" strokeWidth="1" fill="none" />
                </svg>
              </div>
              
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-dark to-gold-primary opacity-90" />
                <div className="absolute inset-1 rounded-full border border-emerald-deep/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cream-light text-4xl" style={{ fontFamily: 'var(--font-script), cursive' }}>N</span>
                </div>
              </div>
              
              <p className="font-sans text-gold-primary text-xs tracking-[0.4em] uppercase mb-4">
                The Bride
              </p>
              
              <h3 
                className="text-3xl md:text-4xl text-emerald-deep mb-6"
                style={{ fontFamily: 'var(--font-script), cursive' }}
              >
                Naseefa CK
              </h3>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-primary" />
                <HeartIcon className="text-gold-primary w-4 h-4" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-primary" />
              </div>
              
              <p className="font-serif text-emerald-rich text-base leading-relaxed">
                Daughter of
              </p>
              <p className="font-serif text-emerald-deep text-lg font-medium mt-1">
                Sainudheen CK & Rukiya Cv
              </p>
              <p className="font-sans text-gold-dark text-sm mt-4 tracking-wide">
                Chandanam Kulangara (house), Thandilam, Naripparamb, Malappuram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
