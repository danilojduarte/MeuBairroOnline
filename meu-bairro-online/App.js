import { Text } from 'react-native';
import { styles } from "./styles.js";
import Button from "./src/components/button/button.jsx";

export default function App() {

  return (<>
    <Text style={styles.textos}>Iniciando Projeto</Text>

    <Button texto="Acessar" />
  </>
  );
}


// Anotacções Projeto = Aula 02 finalizada;