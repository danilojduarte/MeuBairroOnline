import { View, Text, Image, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./restaurante.style.js";

function Restaurante(porps) {
  return (
    <View style={styles.restaurante}>
      <Image source={porps.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{porps.nome}</Text>
        <Text style={styles.endereco}>{porps.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={icons.favoritoFull} style={styles.favorito}/>
      </TouchableOpacity>
    </View>
  );
}

export default Restaurante;
