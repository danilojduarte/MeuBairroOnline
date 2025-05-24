import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./pedido.styles.js";

function Pedido(props) {
  return (
    <TouchableOpacity style={styles.pedido} onPress={() => props.onClickPedido()}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>Nome...</Text>

        <View style={styles.containervalor}>
          <Text style={styles.valor}>
            {
            new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL" }).format(props.valor)
            }
            </Text>
          <Text style={styles.valor}>01/01/2000</Text>
        </View>

        <Text style={styles.status}>Entregue</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Pedido;
