import { useState } from "react";
import ParamTextInput from "./ParamTextInput";
import { makeArray } from "@/lib/utils";
import TrashIcon from "./TrashIcon";

export default function Params() {
   // states
   const [tableIndex, setTableIndex] = useState<number[]>(
      makeArray(1)
   );

   // functions

   // const handleDelete = (index: number) => {};

   const addRowToTable = () => {
      setTableIndex((prev) => makeArray(prev.length + 1));
   };

   return (
      <div className="mt-5">
         <h3>Query params</h3>
         <table className="table">
            <thead>
               <tr className="text-lg">
                  <th>
                     <input
                        type="checkbox"
                        className="checkbox checkbox-primary checkbox-sm"
                     />
                  </th>
                  <th>Key</th>
                  <th>Value</th>
               </tr>
            </thead>
            <tbody>
               {tableIndex.map((num, index) => {
                  return (
                     <tr key={num}>
                        <td>
                           <input
                              type="checkbox"
                              className="checkbox checkbox-primary checkbox-sm"
                           />
                        </td>
                        <td>
                           <ParamTextInput
                              index={index}
                              addRowToTable={addRowToTable}
                              tableIndex={tableIndex.length - 1}
                              type="key"
                           />
                        </td>
                        <td>
                           <ParamTextInput
                              addRowToTable={addRowToTable}
                              tableIndex={tableIndex.length - 1}
                              index={index}
                              type="value"
                           />
                        </td>
                        <td>
                           <button className="btn btn-circle">
                              <TrashIcon />
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
}
