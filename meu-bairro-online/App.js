import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = true;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
 
    
  
}


// Anotacções Projeto = Aula 10(00:00) - Iniciando aula 10!