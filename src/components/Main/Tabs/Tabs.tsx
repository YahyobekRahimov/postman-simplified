import { ReactNode, useState } from "react";
import Params from "./Params";
import Headers from "./Headers";
import Body from "./Body";

type tabType = {
   name: string;
   element: ReactNode;
};

const TABS: tabType[] = [
   {
      name: "Params",
      element: <Params />,
   },
   {
      name: "Headers",
      element: <Headers />,
   },
   {
      name: "Body",
      element: <Body />,
   },
];

export default function Tabs() {
   const [activeTab, setActiveTab] = useState<number>(0);
   return (
      <>
         <div className="mt-5 flex gap-4">
            {TABS.map((tab, index) => (
               <dionv
                  key={index}
                  className={`cursor-pointer border-b border-solid pb-2 ${
                     index === activeTab
                        ? "border-orange-600"
                        : "border-transparent"
                  }`}
                  onClick={() => setActiveTab(index)}
               >
                  {tab.name}
               </dionv>
            ))}
         </div>
         {TABS[activeTab].element}
      </>
   );
}
