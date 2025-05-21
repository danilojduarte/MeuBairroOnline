import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./cardapio.style";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons";
import Produto from "../../components/produto/produto.jsx";

function Cardapio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image
          source={restaurante.foto}
          style={styles.foto}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
          <Image source={icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerTextos}>
          <Text style={styles.nome}>Nome do estabelecimento</Text>
          <Text style={styles.taxa}>Taxa de entrega</Text>
        </View>
        <Image source={icons.favoritoFull} style={styles.favoritoFull} />
      </View>

      <ScrollView>
        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.endereco}>Rua Rosa Filomena, 446 C5</Text>
        </View>

        {restaurante.cardapio.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containerProduto}>
              <Text style={styles.categoria}>{item.categoria}</Text>

              {item.itens.map((prod) => {
                return (
                  <Produto
                    key={prod.idProduto}
                    idProduto={prod.idProduto}
                    foto={prod.foto}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    valor={prod.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Cardapio;
