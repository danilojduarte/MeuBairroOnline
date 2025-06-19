import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}


// Anotacções Projeto = Aula (00:00) - Verificar instalação do express no arquivo 'index.js'!