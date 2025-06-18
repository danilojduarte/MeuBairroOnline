import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias(props) {
  return <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((categorias, index) => {
          return <View key={index} style={styles.categoria}>
              <TouchableOpacity>
                <Image style={styles.icone} source={{ uri: categorias.icone }} />
                <Text style={styles.descricao}>{categorias.categoria}</Text>
              </TouchableOpacity>              
            </View>
        })}
      </ScrollView>
    </View>
  
}
export default Categorias;
