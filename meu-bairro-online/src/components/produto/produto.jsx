import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./produto.style";

function Produto(props) {
  return (
    <TouchableOpacity style={styles.produto}>
      <Image source={props.foto} style={styles.foto} />

      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>
      </View>

      <View style={styles.valor}>
        <Text>{new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.valor)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Produto;
