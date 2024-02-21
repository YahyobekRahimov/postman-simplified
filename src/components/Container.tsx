import { CSSProperties, ReactNode } from "react";

export default function Container({
   children,
   className,
   style,
}: {
   children?: ReactNode;
   className?: string;
   style?: CSSProperties;
}) {
   return (
      <div
         style={style}
         className={`container mx-auto ${className ?? ""}`}
      >
         {children}
      </div>
   );
}
