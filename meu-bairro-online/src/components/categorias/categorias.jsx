import { Text, View, Image, ScrollView } from "react-native";
import { categorias } from "../../constants/dados";
import { styles } from "./categorias.style.js";

function Categorias(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((categorias, index) => {
          return (
            <View key={index} style={styles.categoria}>
              <Image style={styles.icone} source={categorias.icone} />
              <Text style={styles.descricao}>{categorias.descricao}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default Categorias;
