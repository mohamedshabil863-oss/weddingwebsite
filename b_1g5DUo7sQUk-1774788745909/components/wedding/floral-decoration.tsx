import { cn } from "@/lib/utils"

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}

export function FloralDecoration({ position, className }: FloralDecorationProps) {
  const positionClasses = {
    'top-left': 'top-4 left-4 md:top-8 md:left-8',
    'top-right': 'top-4 right-4 md:top-8 md:right-8 rotate-90',
    'bottom-left': 'bottom-4 left-4 md:bottom-8 md:left-8 -rotate-90',
    'bottom-right': 'bottom-4 right-4 md:bottom-8 md:right-8 rotate-180',
  }

  return (
    <div className={cn("absolute w-16 h-16 md:w-24 md:h-24", positionClasses[position], className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-full h-full"
      >
        {/* Main floral branch */}
        <path
          d="M10 90 Q 30 70 25 50 Q 20 30 35 20 Q 50 10 60 25"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
          className="floral-draw"
        />
        
        {/* Leaves */}
        <path
          d="M25 50 Q 15 45 10 55 Q 20 50 25 50"
          fill="rgba(201, 162, 39, 0.3)"
        />
        <path
          d="M30 40 Q 40 35 35 25 Q 35 35 30 40"
          fill="rgba(201, 162, 39, 0.3)"
        />
        <path
          d="M35 60 Q 45 55 50 65 Q 40 60 35 60"
          fill="rgba(201, 162, 39, 0.25)"
        />
        
        {/* Small flowers */}
        <circle cx="60" cy="25" r="5" fill="rgba(201, 162, 39, 0.4)" />
        <circle cx="60" cy="25" r="2" fill="rgba(13, 77, 58, 0.3)" />
        
        <circle cx="20" cy="75" r="4" fill="rgba(201, 162, 39, 0.3)" />
        <circle cx="20" cy="75" r="1.5" fill="rgba(13, 77, 58, 0.25)" />
        
        {/* Decorative dots */}
        <circle cx="45" cy="35" r="1.5" fill="rgba(201, 162, 39, 0.5)" />
        <circle cx="15" cy="65" r="1.5" fill="rgba(201, 162, 39, 0.4)" />
        <circle cx="40" cy="55" r="1" fill="rgba(201, 162, 39, 0.4)" />
        
        {/* Corner accent lines */}
        <path
          d="M0 80 L0 100 L20 100"
          stroke="rgba(201, 162, 39, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(201, 162, 39, 0.6)" />
            <stop offset="50%" stopColor="rgba(201, 162, 39, 0.8)" />
            <stop offset="100%" stopColor="rgba(154, 123, 44, 0.6)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function IslamicPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("w-full h-full", className)}
    >
      <pattern id="islamicStar" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
        <path
          d="M12.5 0L15 10L12.5 7.5L10 10L12.5 0ZM12.5 25L15 15L12.5 17.5L10 15L12.5 25ZM0 12.5L10 10L7.5 12.5L10 15L0 12.5ZM25 12.5L15 10L17.5 12.5L15 15L25 12.5Z"
          fill="rgba(201, 162, 39, 0.1)"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#islamicStar)" />
    </svg>
  )
}
