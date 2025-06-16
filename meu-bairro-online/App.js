import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Anotacções Projeto = Aula 20(00:00) - Aula Concluída;