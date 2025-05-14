import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";

const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
    
  
}


// Anotacções Projeto = Aula 07(33:22) - Modo de navegação entre as telas concluído;