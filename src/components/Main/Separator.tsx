import React, { MouseEvent, useRef, useState } from "react";

const Separator = () => {
   const [isDragging, setIsDragging] = useState(false);
   const elementRef = useRef<HTMLDivElement>(null);
   const [mouseX, setMouseX] = useState<number | null>(null);

   const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setMouseX(event.clientX);
   };

   const handleMouseUp = () => {
      setIsDragging(false);
      setMouseX(null);
   };

   const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (isDragging && mouseX !== null && elementRef.current) {
         const deltaX = event.clientX - mouseX;
         // Do whatever you need with deltaX
         console.log(deltaX);
      }
   };

   return (
      <div
         ref={elementRef}
         onMouseUp={handleMouseUp}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         className="h-full w-[1px] bg-slate-800 after:content-[''] after:w-5 after:h-full relative after:absolute after:top-0 after:left-0 after:translate-x-[-50%] hover:bg-blue-500 hover:cursor-col-resize"
      ></div>
   );
};

export default Separator;
