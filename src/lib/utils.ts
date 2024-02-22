import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function makeArray(length: number) {
   return Array.from({ length: length }, (_, index) => index);
}
