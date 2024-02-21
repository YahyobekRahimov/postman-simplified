import Container from "../Container";
import Form from "./Form";
import Sidebar from "../../layout/Sidebar";
import Separator from "./Separator";
import { useState } from "react";

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
            <Form />
         </Container>
      </main>
   );
}
