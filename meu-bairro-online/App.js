import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
 
    
  
}


// Anotacções Projeto = Aula 07(00:00) - Aula 07 concluída!