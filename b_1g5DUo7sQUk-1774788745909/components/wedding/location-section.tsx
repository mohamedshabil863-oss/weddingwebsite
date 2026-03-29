"use client"

import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/Akbar+Auditorium+Ponnani+Kerala"

  return (
    <section className="py-16 md:py-24 bg-cream-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-deep">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-deep">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-gold-primary tracking-[0.3em] uppercase text-xs mb-3">Find Us Here</p>
          <h2 
            className="text-3xl md:text-4xl text-emerald-deep mb-4"
            style={{ fontFamily: 'var(--font-script), cursive' }}
          >
            Venue Location
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-primary"></span>
            <MapPin className="w-5 h-5 text-gold-primary" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-primary"></span>
          </div>
        </div>

        {/* Map Image Container */}
        <div className="relative mx-auto max-w-2xl">
          {/* Decorative frame */}
          <div className="absolute -inset-3 border border-gold-primary/20 rounded-lg"></div>
          <div className="absolute -inset-1 border border-gold-primary/30 rounded-lg"></div>
          
          {/* Map placeholder with styled design */}
          <div className="relative bg-gradient-to-br from-emerald-deep/5 via-cream-dark to-emerald-deep/10 rounded-lg overflow-hidden shadow-xl aspect-[16/10]">
            {/* Decorative map pattern */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
              <svg className="w-full h-full opacity-10" viewBox="0 0 400 250">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0d4d3a" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Stylized roads */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" preserveAspectRatio="none">
              {/* Main roads */}
              <path d="M 0 125 Q 100 100, 200 125 T 400 125" fill="none" stroke="#c9a227" strokeWidth="3" opacity="0.3"/>
              <path d="M 200 0 Q 180 80, 200 125 T 220 250" fill="none" stroke="#c9a227" strokeWidth="3" opacity="0.3"/>
              <path d="M 50 0 Q 80 60, 120 100 T 200 125" fill="none" stroke="#156b52" strokeWidth="2" opacity="0.2"/>
              <path d="M 350 0 Q 300 80, 250 125 T 200 250" fill="none" stroke="#156b52" strokeWidth="2" opacity="0.2"/>
              
              {/* Area shapes */}
              <rect x="30" y="40" width="60" height="40" rx="3" fill="#0d4d3a" opacity="0.08"/>
              <rect x="300" y="30" width="70" height="50" rx="3" fill="#0d4d3a" opacity="0.08"/>
              <rect x="50" y="160" width="80" height="60" rx="3" fill="#0d4d3a" opacity="0.08"/>
              <rect x="280" y="170" width="90" height="50" rx="3" fill="#0d4d3a" opacity="0.08"/>
            </svg>

            {/* Location marker with pulse effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gold-primary/10 animate-ping"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gold-primary/20 animate-pulse"></div>
              </div>
              
              {/* Marker pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold-primary/30">
                  <MapPin className="w-6 h-6 text-cream-light" />
                </div>
                <div className="w-3 h-3 bg-gold-primary rotate-45 -mt-1.5 shadow-md"></div>
              </div>
            </div>

            {/* Venue label */}
            <div className="absolute top-1/2 left-1/2 mt-16 -translate-x-1/2 bg-cream-light/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gold-primary/20">
              <p className="text-emerald-deep font-serif text-sm font-medium whitespace-nowrap">Akbar Auditorium</p>
            </div>

            {/* Decorative compass */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-40">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <circle cx="25" cy="25" r="23" fill="none" stroke="#c9a227" strokeWidth="1"/>
                <circle cx="25" cy="25" r="20" fill="none" stroke="#c9a227" strokeWidth="0.5"/>
                <path d="M 25 5 L 27 25 L 25 28 L 23 25 Z" fill="#0d4d3a"/>
                <path d="M 25 45 L 27 25 L 25 22 L 23 25 Z" fill="#c9a227"/>
                <text x="25" y="3" textAnchor="middle" fill="#0d4d3a" fontSize="4" fontWeight="bold">N</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Get Directions Button */}
        <div className="text-center mt-10">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-deep to-emerald-rich text-cream-light font-medium tracking-wider uppercase text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-deep/30 hover:scale-105"
          >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            
            {/* Button content */}
            <Navigation className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            <span className="relative">Get Directions</span>
            
            {/* Arrow indicator */}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          {/* Subtle hint text */}
          <p className="mt-4 text-emerald-rich/50 text-xs tracking-wide">
            Opens in Google Maps
          </p>
        </div>
      </div>
    </section>
  )
}
