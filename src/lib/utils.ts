import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string | null): string {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}