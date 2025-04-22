import { FlatList, View } from "react-native";
import { restaurantes } from "../../constants/dados";
import Restaurante from "../../components/restaurante/restaurante";

function Favoritos(){
  return <View>
    <FlatList data={restaurantes} 
    keyExtractor={(restaurantes) => restaurantes.id}
    showsVerticalScrollIndicator={false}
    renderItem={() => {
      return <Restaurante nome="xxxx"
      endereco="Rua xxxx"
      />
    }}
    />

    </View>
}

export default Favoritos;
