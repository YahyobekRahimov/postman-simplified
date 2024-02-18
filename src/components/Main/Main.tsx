import { useRef } from "react";
import Container from "../Container";
import Form from "./Form";

export default function Main() {
   return (
      <main>
         <Container className="flex items-center gap-2 w-full">
            <Form />
         </Container>
      </main>
   );
}
