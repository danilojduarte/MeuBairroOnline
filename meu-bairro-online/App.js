import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";


export default function App() {

  return <AuthProvider>
    <Routes />;
  </AuthProvider>
  
}

// Anotacções Projeto = Aula 19(45:40) - Configurando validações usuarios;