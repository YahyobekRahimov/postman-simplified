import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Providers from "./components/Providers";

function App() {
   return (
      <Providers>
         <Header />

         <Main />
      </Providers>
   );
}

export default App;
