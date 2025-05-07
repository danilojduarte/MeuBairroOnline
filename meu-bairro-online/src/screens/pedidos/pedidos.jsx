import { FlatList, Image, View, Text } from "react-native";
import { pedidos } from "../../constants/dados";
import icons from "../../constants/icons";
import { styles } from "./pedidos.style";
import Pedido from "../../components/pedido/pedido";

function Pedidos() {
  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(restaurantes) => restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pedido logotipo={item.logotipo}/>
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum Favorito Encontrado</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Pedidos;
