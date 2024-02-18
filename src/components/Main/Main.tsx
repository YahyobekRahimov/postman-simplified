import Container from "../Container";
import RequestTypeSelect from "../RequestTypeSelect";
import { Input } from "../ui/input";

export default function Main() {
   return (
      <main>
         <Container>
            <div className="flex items-center">
               <RequestTypeSelect />
               <Input type="text" placeholder="Type here" />
            </div>
         </Container>
      </main>
   );
}
