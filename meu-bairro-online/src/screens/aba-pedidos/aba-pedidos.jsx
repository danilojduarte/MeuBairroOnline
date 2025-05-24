import { FlatList, Image, View, Text } from "react-native";
import { pedidos } from "../../constants/dados";
import icons from "../../constants/icons";
import { styles } from "./aba-pedidos.style";
import Pedido from "../../components/pedido/pedido";
import { useLinkProps } from "@react-navigation/native";

function AbaPedidos(props) {

  function DetalhePedido() {
    props.navigation.navigate("detalhe-pedido");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(restaurantes) => restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (<Pedido logotipo={item.logotipo}
           nome={item.nome} 
           valor={item.vl_total}
           dt_pedido={item.dt_pedido}
           status={item.status}
           onClickPedido={DetalhePedido} />
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

export default AbaPedidos;
