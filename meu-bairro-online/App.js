import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = true;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
 
    
  
}


// Anotacções Projeto = Aula 09(26:44) - Concluído detalhes do pedido!