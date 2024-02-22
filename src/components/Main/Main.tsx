import Container from "../Container";
import Form from "./Form";
import Sidebar from "../../layout/Sidebar";
import Tabs from "./Tabs/Tabs";
import Response from "./Response";

export default function Main() {
   return (
      <main>
         <Container
            className="flex gap-4 w-full h-screen"
            style={{
               gridTemplateColumns: `0.4fr 0fr 2fr`,
            }}
         >
            <Sidebar />
            <div className="w-full max-w-[60rem] overflow-auto">
               <Form />
               <Tabs />
               <Response />
            </div>
         </Container>
      </main>
   );
}
