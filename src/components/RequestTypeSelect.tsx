import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";

export default function RequestTypeSelect() {
   return (
      <Select defaultValue="GET">
         <SelectTrigger className="w-[7rem] font-semibold">
            <SelectValue placeholder="Select HTTP Request" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup className="font-semibold">
               <SelectItem value="GET">GET</SelectItem>
               <SelectItem value="POST">POST</SelectItem>
               <SelectItem value="PUT">PUT</SelectItem>
               <SelectItem value="PATCH">PATCH</SelectItem>
               <SelectItem value="DELETE">DELETE</SelectItem>
               <SelectItem value="HEAD">HEAD</SelectItem>
               <SelectItem value="OPTIONS">OPTIONS</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
