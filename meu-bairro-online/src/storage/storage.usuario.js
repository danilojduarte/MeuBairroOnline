import AsyncStorage from "@react-native-async-storage/async-storage";

async function SalveUsuario(usuario) {
  try {
    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
  } catch (error) {
    console.log("Erro ao salvar storage");
  }
}

export {SalveUsuario}