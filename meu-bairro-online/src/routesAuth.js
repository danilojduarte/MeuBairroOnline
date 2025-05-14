import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "./constants/icons.js";

import Home from "./screens/home/home.jsx";
import Favoritos from "./screens/favoritos/favoritos.jsx";
import Pedidos from "./screens/pedidos/pedidos.jsx";
import Perfil from "./screens/perfil/perfil.jsx";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaHome}
                  style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="favoritos"
          component={Favoritos}
          options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            // headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaFavoritos}
                  style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="pedidos"
          component={Pedidos}
          options={{
            title: "Meus Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            // headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaPedidos}
                  style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="perfil"
          component={Perfil}
          options={{
            title: "Meu Perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            // headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={icons.abaPerfil}
                  style={{ width: 30, height: 30, opacity: focused ? 1 : 0.3 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
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
