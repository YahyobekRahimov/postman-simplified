import Container from "../Container";
import ThemeController from "./ThemeController";

export default function Header() {
   return (
      <header>
         <Container className="flex items-center justify-around py-2">
            <h1 className="uppercase font-bold text-4xl">Postman</h1>
            <ThemeController></ThemeController>
         </Container>
      </header>
   );
}
