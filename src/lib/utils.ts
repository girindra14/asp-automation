import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Untuk Astro, BASE_URL biasanya dari import.meta.env
export const BASE_URL = import.meta.env.BASE_URL || "/";