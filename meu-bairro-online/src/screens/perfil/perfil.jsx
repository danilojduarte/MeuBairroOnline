import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons";

function Perfil() {
  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.endereco} style={styles.icone} />
        </View>

        <View style={styles.textos}>
          <Text>Endereço</Text>
          <Text>Meu endereço de entrega</Text>
        </View>

        <View>
          <Image source={icons.more} style={styles.icone} />
        </View>

      </TouchableOpacity>


    </View>
  )
}

export default Perfil;