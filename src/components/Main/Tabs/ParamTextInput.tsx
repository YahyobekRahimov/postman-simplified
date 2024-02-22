import { ChangeEvent, useState } from "react";

export default function ParamTextInput({
   index,
   type,
   addRowToTable,
   tableIndex,
}: {
   index: number;
   type: "key" | "value";
   addRowToTable: any;
   tableIndex: number;
}) {
   const [value, setValue] = useState<string>("");
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (event.target.value.length > 0) {
         if (tableIndex === index) {
            addRowToTable();
         }
      }
   };
   return (
      <input
         type="text"
         className="input input-sm input-ghost"
         placeholder={type}
         value={value}
         onChange={handleChange}
      />
   );
}
