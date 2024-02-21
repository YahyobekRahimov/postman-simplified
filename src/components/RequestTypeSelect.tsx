import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "./ui/select";

const selectItems = [
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
   handleSelectChange,
}: {
   requestType: string;
   handleSelectChange: any;
}) {
   const getColor = () => {
      const color = selectItems.find(
         (color) => color.type === requestType
      );
      return color?.color;
   };
   return (
      <Select
         defaultValue="GET"
         value={requestType}
         onValueChange={handleSelectChange}
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
               {selectItems.map((color) => (
                  <SelectItem
                     value={color.type}
                     key={color.type}
                     style={{ color: color.color }}
                  >
                     {color.type}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
