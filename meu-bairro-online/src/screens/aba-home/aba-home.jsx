import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import { restaurantes } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import api from "../../constants/api.js";

function AbaHome(props) {

  async function LoadCategory() {

        try {
            const response = await api.get("/categorias");
            
            if (response.data){
              setCategorias(response.data);                
            }

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

  async function LoadBanner() {

        try {
            const response = await api.get("/banners");
            
            if (response.data){
              setBanner(response.data);                
            }

        } catch (error) {
            setLoading(false);
            await SaveUsuario({});
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

  function OpenCardapio() {
props.navigation.navigate("cardapio")  
    }

  
  const [busca, setBusca] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    LoadCategory();
    LoadBanner();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo2} style={styles.logo} />

        <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
          <Image source={icons.cart} style={styles.cart} />
        </TouchableOpacity>
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
                onPress={OpenCardapio}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AbaHome;
