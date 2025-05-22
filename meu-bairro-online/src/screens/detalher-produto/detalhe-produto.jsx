import { Image, TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "./detalher-produto.style.js";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons";

function DetalheProduto(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image source={icons.produto} style={styles.foto} resizeMode="cover" />

        <TouchableOpacity
          style={styles.containerBack}
          onPress={props.navigation.goBack}
        >
          <Image source={icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerTextos}>
          <Text style={styles.nome}>Pizza Calabresa</Text>
          <Text style={styles.descricao}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text style={styles.valor}>R$ 30,00</Text>
        </View>
      </View>

      <View style={styles.headerObs}>
        <Text style={styles.descricao}>Observações</Text>
        <TextInput style={styles.multiline}
        multiline={true}
        numberOfLines={4} />
      </View>



    </View>
  );
}

export default DetalheProduto;
