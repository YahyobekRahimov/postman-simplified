import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function makeArray(length: number) {
   return Array.from({ length: length }, (_, index) => index);
}

export const getRequest: (url: string) => Promise<
   | {
        data: any;
        res: Response;
     }
   | undefined
> = async (url) => {
   try {
      const res = await fetch(url);

      if (!res.ok) {
         throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      return { data, res };
   } catch (error) {
      console.error("Error fetching data: ", error);
   }
};
