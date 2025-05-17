import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
 
    
  
}


// Anotacções Projeto = Aula 08(01:03:35) - Criando nova tela "principal"!