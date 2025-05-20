import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import icons from "./constants/icons.js";

import Home from "../../screens/aba-home/aba-home.jsx";
import Favoritos from "../../screens/aba-favoritos/aba-favoritos.jsx";
import Pedidos from "../../screens/aba-pedidos/aba-pedidos.jsx";
import Perfil from "../../screens/aba-perfil/aba-perfil.jsx";


const Tab = createBottomTabNavigator();


function Principal() {
  return 
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
}

export default Principal;