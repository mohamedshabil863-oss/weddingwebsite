"use client"

import { StarIcon, CalendarIcon, ClockIcon, LocationIcon, HeartIcon } from "./icons"

export function EventsSection() {
  return (
    <section className="py-24 px-4 relative bg-emerald-deep overflow-hidden">
      {/* Elegant pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23c9a227' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='5' fill='none' stroke='%23c9a227' stroke-width='0.3'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-sans text-gold-light text-xs tracking-[0.4em] uppercase mb-4">
            Mark Your Calendar
          </p>
          <h2 
            className="text-4xl md:text-5xl text-cream-primary mb-6"
            style={{ fontFamily: 'var(--font-script), cursive' }}
          >
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold-primary" />
            <StarIcon className="text-gold-primary w-4 h-4 gold-shimmer" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold-primary" />
          </div>
        </div>
        
        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Nikah Card */}
          <div className="group">
            <div 
              className="bg-cream-primary p-10 md:p-12 text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{ border: '2px solid rgba(201, 162, 39, 0.5)' }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              
              {/* Ornamental top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-deep to-transparent" />
              
              {/* Icon with decorative circle */}
              <div className="w-20 h-20 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-primary/40 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full bg-emerald-deep/10 flex items-center justify-center">
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-emerald-deep">
                    <path 
                      d="M32 8C32 8 20 16 20 28C20 40 32 48 32 48C32 48 44 40 44 28C44 16 32 8 32 8Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                    />
                    <path 
                      d="M32 20V36M26 28H38" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>
              
              <h3 
                className="text-3xl md:text-4xl text-emerald-deep mb-2"
                style={{ fontFamily: 'var(--font-script), cursive' }}
              >
                The Nikah
              </h3>
              
              <p className="font-sans text-gold-dark text-sm tracking-widest uppercase mb-6">
                Sacred Ceremony
              </p>
              
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mb-6" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-3 bg-emerald-deep/5 rounded-sm">
                  <CalendarIcon className="text-gold-primary w-5 h-5" />
                  <div className="text-left">
                    <p className="font-sans text-emerald-rich text-sm font-medium">Saturday</p>
                    <p className="font-serif text-emerald-deep text-lg">April 12, 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-emerald-deep/5 rounded-sm">
                  <ClockIcon className="text-gold-primary w-5 h-5" />
                  <div className="text-left">
                    <p className="font-sans text-emerald-rich text-sm font-medium">Time</p>
                    <p className="font-serif text-emerald-deep text-lg">After Magrib</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-emerald-deep/5 rounded-sm">
                  <LocationIcon className="text-gold-primary w-5 h-5" />
                  <div className="text-left">
                    <p className="font-sans text-emerald-rich text-sm font-medium">Venue</p>
                    <p className="font-serif text-emerald-deep text-base">Thandilam, Kadancheri Juma Masjid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wedding Ceremony Card */}
          <div className="group">
            <div 
              className="bg-cream-primary p-10 md:p-12 text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              style={{ border: '2px solid rgba(201, 162, 39, 0.5)' }}
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-primary transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              
              {/* Ornamental top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
              
              {/* Icon with decorative circle */}
              <div className="w-20 h-20 mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-primary/40 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full bg-gold-primary/10 flex items-center justify-center">
                  <HeartIcon className="w-10 h-10 text-gold-primary" />
                </div>
              </div>
              
              <h3 
                className="text-3xl md:text-4xl text-emerald-deep mb-2"
                style={{ fontFamily: 'var(--font-script), cursive' }}
              >
                The Wedding
              </h3>
              
              <p className="font-sans text-gold-dark text-sm tracking-widest uppercase mb-6">
                Grand Celebration
              </p>
              
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mb-6" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 p-3 bg-gold-primary/5 rounded-sm">
                  <CalendarIcon className="text-gold-primary w-5 h-5" />
                  <div className="text-left">
                    <p className="font-sans text-emerald-rich text-sm font-medium">Sunday</p>
                    <p className="font-serif text-emerald-deep text-lg">April 13, 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Special note */}
              <div className="mt-8 p-4 border border-gold-primary/30 bg-gold-pale/20 rounded-sm">
                <p className="font-serif text-emerald-deep text-sm italic">
                  Your presence is the greatest gift
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
    </section>
  )
}
