import Container from "../Container";
import Form from "./Form";
import Sidebar from "../../layout/Sidebar";

export default function Main() {
   return (
      <main>
         <Container className="flex items-center gap-2 w-full">
            <Sidebar />
            <Form />
         </Container>
      </main>
   );
}
