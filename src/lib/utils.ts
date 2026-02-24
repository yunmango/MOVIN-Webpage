import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BTN_PRIMARY =
  "inline-flex items-center justify-center transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/30 focus-visible:ring-offset-2"

export const BTN_SECONDARY =
  "inline-flex items-center justify-center transition-all duration-200 ease-out hover:bg-[#1a1a1a] hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/30 focus-visible:ring-offset-2"

export const BTN_GHOST =
  "inline-flex items-center justify-center transition-all duration-200 ease-out hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/30 focus-visible:ring-offset-2"
