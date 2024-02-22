import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import RequestTypeSelect from "../RequestTypeSelect";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateRequest } from "@/redux/requestsSlice";
import { requestMethods, requestType } from "@/types/types";

export default function Form() {
   // States
   const [requestType, setRequestType] =
      useState<requestMethods>("GET");
   const [requestName, setRequestName] =
      useState<string>("New request");
   const [requestURL, setRequestURL] = useState<string>("");

   // Other hooks
   const dispatch = useDispatch();
   const request = useSelector((state: RootState) =>
      state.requests.requests.find(
         (request) => request.id === state.requests.currentRequest
      )
   );

   // Event handler functions
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log("submitted");
   };
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setRequestName(e.target.value);
   };
   const handleURLChange = (e: ChangeEvent<HTMLInputElement>) => {
      setRequestURL(e.target.value);
      const changedParts: Partial<requestType> = {
         id: request?.id,
         url: e.target.value,
      };
      dispatch(updateRequest(changedParts));
   };

   const handleSelectChange = (e: requestMethods) => {
      setRequestType(e);
      const changedParts: Partial<requestType> = {
         id: request?.id,
         requestMethod: e,
      };
      dispatch(updateRequest(changedParts));
   };

   // Side effects
   useEffect(() => {
      const changedParts: Partial<requestType> = {
         id: request?.id,
         name: requestName,
      };
      dispatch(updateRequest(changedParts));
   }, [requestName]);

   useEffect(() => {
      if (request?.name) {
         setRequestName(request.name);
         setRequestType(request.requestMethod);
         setRequestURL(request.url);
      }
   }, [request]);

   return (
      <div className="w-full flex flex-col gap-5 mt-5">
         {request && (
            <input
               type="text"
               className="bg-transparent text-xl px-2 py-2 focus:border-slate-500"
               value={requestName}
               onChange={handleChange}
               style={{
                  border: "rgb(100, 116, 139)",
                  outline: "rgb(100, 116, 139)",
               }}
            />
         )}
         <form
            onSubmit={handleSubmit}
            className="flex items-start gap-2 w-full"
         >
            <div className="flex items-center border-1 border-solid border rounded-lg w-full">
               <RequestTypeSelect
                  requestType={requestType}
                  handleSelectChange={handleSelectChange}
               />
               <div className="h-[1.5rem] w-[1px] bg-slate-400 opacity-50 mx-1"></div>
               <Input
                  className="border-none outline-none"
                  type="text"
                  placeholder="URL"
                  value={requestURL}
                  onChange={handleURLChange}
               />
            </div>
            <Button type="submit">Send</Button>
         </form>
      </div>
   );
}
