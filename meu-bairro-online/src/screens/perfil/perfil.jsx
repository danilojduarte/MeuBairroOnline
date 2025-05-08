import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons";

function Perfil() {
  return(
    <View style={styles.container}>

      <TouchableOpacity>
        <View>
          <Image source={icons.endereco} style={styles.icone} />
        </View>

      </TouchableOpacity>


    </View>
  )
}

export default Perfil;