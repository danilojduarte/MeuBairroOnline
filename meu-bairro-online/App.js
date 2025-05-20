import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
 
    
  
}


// Anotacções Projeto = Aula 08(01:09:17) - Ajustando tela principal!