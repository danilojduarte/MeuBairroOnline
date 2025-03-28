import { Text } from 'react-native';
import { styles } from "./styles.js";
import Button from "./src/components/button/button.js";

export default function App() {

  return (<>
    <Text style={styles.textos}>Hello World</Text>

    <Button texto="Acessar" />
  </>
  );
}