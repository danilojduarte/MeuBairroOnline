import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { categorias } from "../../constants/dados";
import { styles } from "./categorias.style.js";

function Categorias(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((categorias, index) => {
          return (
            <View key={index} style={styles.categoria}>
              <TouchableOpacity>
                <Image style={styles.icone} source={categorias.icone} />
              </TouchableOpacity>
              <Text style={styles.descricao}>{categorias.descricao}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default Categorias;
