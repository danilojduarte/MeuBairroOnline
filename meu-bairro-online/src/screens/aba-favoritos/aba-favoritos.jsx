import { useState } from "react";
import { FlatList, Image, View, Text } from "react-native";
import Restaurante from "../../components/restaurante/restaurante";
import icons from "../../constants/icons";
import { styles } from "./aba-favoritos.style";

function AbaFavoritos() {

  const [restaurantes, setRestaurantes] = useState([]);


  

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurantes) => restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Restaurante
              nome={item.nome}
              endereco={item.endereco}
              logotipo={item.logotipo}
              icone={icons.remove}
            />
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

export default AbaFavoritos;
