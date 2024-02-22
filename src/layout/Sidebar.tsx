import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Separator from "@/components/Main/Separator";
import {
   addNewRequest,
   setCurrentRequest,
} from "@/redux/requestsSlice";
import { requestType } from "@/types/types";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
   const [sidebarWidth, setSidebarWidth] = useState<number>(500);
   const theme: "light" | "dark" = "dark";
   const dispatch = useDispatch();
   const requests = useSelector(
      (state: RootState) => state.requests.requests
   );

   const currentId = useSelector(
      (state: RootState) => state.requests.currentRequest
   );
   const handleAddClick = () => {
      const request: requestType = {
         id: uuidv4(),
         name: "New request",
         params: [],
         requestMethod: "GET",
         url: "",
      };
      dispatch(addNewRequest(request));
      dispatch(setCurrentRequest(request.id));
   };
   return (
      <>
         {sidebarWidth < 300 ? (
            ""
         ) : (
            <div style={{ width: sidebarWidth + "px" }}>
               <div className="flex flex-col gap-2">
                  <Button
                     size={"sm"}
                     variant={"secondary"}
                     className="text-3xl w-max"
                     onClick={handleAddClick}
                  >
                     +
                  </Button>
                  <div className="w-full h-[1px] bg-slate-600"></div>
                  <ul>
                     {requests.map((req, index) => (
                        <li
                           onClick={() =>
                              dispatch(setCurrentRequest(req.id))
                           }
                           key={index}
                           className={`cursor-pointer ${
                              currentId === req.id
                                 ? `${
                                      theme == "dark"
                                         ? "bg-slate-700"
                                         : "bg-slate-300"
                                   }`
                                 : ""
                           }`}
                        >
                           {index + 1 + ". " + req.name}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         )}
         <Separator setSidebarRatio={setSidebarWidth} />
      </>
   );
}
