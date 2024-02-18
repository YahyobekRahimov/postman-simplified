import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";

const colors = [
   {
      type: "GET",
      color: "#64D592",
   },
   {
      type: "POST",
      color: "#FCE17D",
   },
   {
      type: "PUT",
      color: "#71A9EE",
   },
   {
      type: "PATCH",
      color: "#B7A0D6",
   },
   {
      type: "DELETE",
      color: "#F79A8E",
   },
   {
      type: "HEAD",
      color: "#65CF91",
   },
   {
      type: "OPTION",
      color: "#E95BAA",
   },
];

export default function RequestTypeSelect({
   requestType,
   setRequestType,
}: {
   requestType: string;
   setRequestType: any;
}) {
   const getColor = () => {
      const color = colors.find(
         (color) => color.type === requestType
      );
      return color?.color;
   };
   return (
      <Select
         defaultValue="GET"
         onValueChange={(e) => setRequestType(e)}
      >
         <SelectTrigger
            className={`w-[7rem] font-semibold focus:outline-none`}
            style={{
               color: `${getColor()}`,
               borderColor: "transparent",
            }}
         >
            <SelectValue placeholder="Select HTTP Request" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup className="font-semibold">
               <SelectItem style={{ color: "#64D592" }} value="GET">
                  GET
               </SelectItem>
               <SelectItem style={{ color: "#FCE17D" }} value="POST">
                  POST
               </SelectItem>
               <SelectItem style={{ color: "#71A9EE" }} value="PUT">
                  PUT
               </SelectItem>
               <SelectItem style={{ color: "#B7A0D6" }} value="PATCH">
                  PATCH
               </SelectItem>
               <SelectItem
                  style={{ color: "#F79A8E" }}
                  value="DELETE"
               >
                  DELETE
               </SelectItem>
               <SelectItem style={{ color: "#65CF91" }} value="HEAD">
                  HEAD
               </SelectItem>
               <SelectItem
                  style={{ color: "#E95BAA" }}
                  value="OPTIONS"
               >
                  OPTIONS
               </SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
