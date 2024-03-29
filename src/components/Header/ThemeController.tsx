import { useEffect, useState } from "react";

export default function ThemeController() {
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
      if (localStorage.theme && localStorage.theme === "dark") {
         setIsDark(true);
      } else if (
         localStorage.theme &&
         localStorage.theme === "light"
      ) {
         setIsDark(false);
      } else if (
         window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
         setIsDark(true);
      } else {
         setIsDark(false);
      }
   }, []);

   useEffect(() => {
      if (isDark) {
         document.documentElement.setAttribute("data-theme", "dark");
         document.documentElement.setAttribute("class", "dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.setAttribute("data-theme", "light");
         document.documentElement.setAttribute("class", "light");
         localStorage.setItem("theme", "light");
      }
   }, [isDark]);

   return (
      <label className="cursor-pointer grid place-items-center">
         <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
         />
         <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
         </svg>
         <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
         </svg>
      </label>
   );
}
