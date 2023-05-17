import "./App.css";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import Idiomas from "./Idiomas";
import Pagina from "./Pagina";
import Colores from "./Colores";
import { Datos } from "./contexto/Contexto";
import Provider from "./contexto/Provider";

function App() {
  return (
    <>
      <Datos>
        <div className="App">
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>

      <Provider>
        <div className="banderas">
          <Idiomas />
        </div>
        <div className="contenido">
          <Pagina />
        </div>
      </Provider>
    </>
  );
}

export default App;
