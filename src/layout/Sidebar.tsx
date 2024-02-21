import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Sidebar() {
   const requests = useSelector(
      (state: RootState) => state.requests.requests
   );
   return (
      <div className="flex flex-col gap-2">
         <Button
            size={"sm"}
            variant={"secondary"}
            className="text-3xl w-max"
         >
            +
         </Button>
         <div className="w-full h-[1px] bg-slate-600"></div>
         <ul>
            {[1, 2, 3].map((req, index) => (
               <li key={index}>{"New Request " + req}</li>
            ))}
         </ul>
      </div>
   );
}
