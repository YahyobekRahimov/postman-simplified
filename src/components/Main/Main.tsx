import Container from "../Container";
import Form from "./Form";
import Sidebar from "../../layout/Sidebar";
import Separator from "./Separator";

export default function Main() {
   return (
      <main>
         <Container
            className="grid gap-4 w-full h-screen"
            style={{ gridTemplateColumns: `0.3fr 0fr 2fr` }}
         >
            <Sidebar />
            <Separator />
            <Form />
         </Container>
      </main>
   );
}
