import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./detalher-produto.style.js";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons";

function DetalheProduto(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={icons.produto}
          style={styles.foto}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
          <Image source={icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerTextos}>
          <Text style={styles.nome}>Pizza Calabresa</Text>
          <Text style={styles.taxa}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    <Text style={styles.nome}>R$ 30,00</Text>

        </View>
      </View>

        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.endereco}>Rua Rosa Filomena, 446 C5</Text>
        </View>
    </View>
  );
}

export default DetalheProduto;
