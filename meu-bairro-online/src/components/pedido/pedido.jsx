import { View, Image, Text } from "react-native";
import { styles } from "./pedido.styles.js";

function Pedido(props) {
  return (
    <View style={styles.pedido}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>Nome...</Text>

        <View style={styles.containervalor}>
          <Text style={styles.valor}>10,00</Text>
          <Text style={styles.valor}>01/01/2000</Text>
        </View>

        <Text style={styles.status}>Entregue</Text>
      </View>
    </View>
  );
}

export default Pedido;
