import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}


// Anotacções Projeto = Aula 21(28:35) - Ajustando validações de favoritos!