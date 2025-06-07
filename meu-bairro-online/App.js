import RoutesOpen from "./src/routesOpen.js";
import RoutesAuth from "./src/routesAuth.js";


const isUserAuth = false;

export default function App() {
  return isUserAuth ? <RoutesAuth /> : <RoutesOpen />
}


// Anotacções Projeto = Aula 11(00:00) - Iniciando aula 11 - Criando API!