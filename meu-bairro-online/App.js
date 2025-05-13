import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";

const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
    
  
}


// Anotacções Projeto = Aula 06(##:##) - Concluída, finalizada tela de perfils.