import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import { categorias, banners, restaurantes } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";

function AbaHome() {
  const [busca, setBusca] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo2} style={styles.logo} />
        <Image source={icons.cart} style={styles.cart} />
      </View>

      <View style={styles.busca}>
        <TextBox
          placeholder="O que você deseja hoje? "
          onChangeText={(text) => setBusca(text)}
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados={categorias} />
        <Banners dados={banners} />

        {restaurantes.map((restaurante, indice) => {
          return (
            <View key={indice}>
              <Restaurante
                logotipo={restaurante.logotipo}
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                icone={icons.favoritoFull}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AbaHome;
