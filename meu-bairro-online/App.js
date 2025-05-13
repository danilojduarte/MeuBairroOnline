import Routes from "./src/routes";
import RoutesAuth from "./src/routesAuth.js";

const isUserAuth = true;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <Routes />
    
  
}


// Anotacções Projeto = Aula 07(11:40) - Create to menu navegation.