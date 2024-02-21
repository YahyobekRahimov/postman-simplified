import React, { MouseEvent, useRef, useState } from "react";

const Separator = ({
   setSidebarRatio,
}: {
   setSidebarRatio: React.Dispatch<React.SetStateAction<number>>;
}) => {
   const [isDragging, setIsDragging] = useState(false);
   const elementRef = useRef<HTMLDivElement>(null);
   const [mouseX, setMouseX] = useState<number | null>(null);

   const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setMouseX(event.clientX);
   };

   const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
      setIsDragging(false);
      setMouseX(null);
      if (isDragging && mouseX !== null && elementRef.current) {
         const deltaX = event.clientX - mouseX;
         console.log(deltaX);
         setSidebarRatio((prev) => prev + deltaX);

         //  if (deltaX >= 0) {
         //     setSidebarRatio((prev) => prev + deltaX);
         //  } else {
         //     setSidebarRatio((prev) => prev - deltaX);
         //  }
      }
   };

   const handleMouseOut = () => {
      setIsDragging(false);
      setMouseX(null);
   };

   return (
      <div
         ref={elementRef}
         onMouseUp={handleMouseUp}
         onMouseDown={handleMouseDown}
         onMouseOut={handleMouseOut}
         className={`h-full w-[1px] bg-slate-800 after:content-[''] after:h-full relative after:absolute after:top-0 after:left-0 after:translate-x-[-50%] hover:bg-blue-500 hover:cursor-col-resize ${
            isDragging ? "after:w-screen" : "after:w-8"
         }`}
      ></div>
   );
};

export default Separator;
