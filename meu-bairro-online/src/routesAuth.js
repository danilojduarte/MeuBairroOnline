import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Tab = createBottomTabNavigator();


function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="login" component={Login} options={{
        headerShown: false,
      }} />

      <Stack.Screen name="registro2" component={Registro2} options={{
        headerShown: false,
      }} />    

    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;

// <Stack.Screen name="perfil" component={Perfil} options={{
//     title: "Meu Perfil",
//     headerTitleAlign: "center",
//     headerShadowVisible: false,
//   }} />

// <Stack.Screen name="pedidos" component={Pedidos} options={{
//     title: "Meus Pedidos",
//     headerTitleAlign: "center",
//     headerShadowVisible: false,
//   }} />

// <Stack.Screen name="favoritos" component={Favoritos} options={{
//     title: "Favoritos",
//     headerTitleAlign: "center",
//     headerShadowVisible: false,
//   }} />

// <Stack.Screen name="home" component={Home} options={{
//     headerShown: false,
//   }} />

// import Home from "./screens/home/home.jsx";
// import Favoritos from "./screens/favoritos/favoritos.jsx";
// import Pedidos from "./screens/pedidos/pedidos.jsx";
// import Perfil from "./screens/perfil/perfil.jsx";
