import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

export default function Response() {
   const data = useSelector(
      (state: RootState) => state.responseSlice.data
   );
   return (
      <div className="mt-7 border-t border-solid overflow-auto">
         <JSONPretty
            mainStyle="background: transparent"
            id="json-pretty"
            data={data}
         ></JSONPretty>
      </div>
   );
}
