import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-6 h-6", className)}
    >
      <path 
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
        fill="currentColor" 
      />
    </svg>
  )
}

export function PersonIcon({ className }: IconProps) {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-8 h-8", className)}
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path 
        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  )
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10H21M8 2V6M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={cn("w-4 h-4", className)}
    >
      <path 
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
      />
      <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function NikahIcon({ className }: IconProps) {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      className={cn("w-16 h-16", className)}
    >
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
  )
}

export function WeddingIcon({ className }: IconProps) {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      className={cn("w-16 h-16", className)}
    >
      <circle cx="22" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
      <path 
        d="M30 28C30 28 32 24 32 20M34 28C34 28 32 24 32 20" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M16 44C16 38 22 34 32 34C42 34 48 38 48 44" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
    </svg>
  )
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={cn("w-5 h-5", className)}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}
