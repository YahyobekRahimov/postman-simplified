import { FormEvent, useState } from "react";
import RequestTypeSelect from "../RequestTypeSelect";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Form() {
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      console.log("submitted");
   };
   const [requestType, setRequestType] = useState("GET");
   return (
      <form
         onSubmit={handleSubmit}
         className="flex items-center gap-2 w-full"
      >
         <div className="flex items-center border-1 border-solid border rounded-lg w-full">
            <RequestTypeSelect
               requestType={requestType}
               setRequestType={setRequestType}
            />
            <div className="h-[1.5rem] w-[1px] bg-slate-400 opacity-50 mx-1"></div>
            <Input
               className="border-none outline-none"
               type="text"
               placeholder="Type here"
            />
         </div>
         <Button type="submit">Send</Button>
      </form>
   );
}
