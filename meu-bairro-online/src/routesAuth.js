import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "../../screens/principal/principal.js";
import Cardapio from "../../screens/cardapio/cardapio.js"
import Busca from "../../screens/busca/busca.js";
import DetalheProduto from "../../screens/detalhe-produto/detalhe-produto.js";
import DetalhePedido from "../../screens/detalhe-pedido/detalhe-pedido.js";
import Checkout from "../../screens/checkout/checkout.js";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "./constants/themes.js";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
    return <NavigationContainer>

        <Stack.Navigator>

            <Stack.Screen name="principal" component={Principal} options={{
                headerShown: false
            }} />

            <Stack.Screen name="checkout" component={Checkout} options={{
                headerShadowVisible: false,
                title: "Meu Pedido",
                headerTitleAlign: "center",
                headerRight: () => {
                    return <TouchableOpacity onPress={() => alert("OK")}>
                        <Text style={{ color: COLORS.red }}>Limpar</Text>
                    </TouchableOpacity>
                },
                animation: "slide_from_bottom",
            }} />

            <Stack.Screen name="detalhe-pedido" component={DetalhePedido} options={{
                headerShadowVisible: false,
                title: "Detalhes do Pedido",
                headerTitleAlign: "center",
                animation: "slide_from_bottom"
            }} />

            <Stack.Screen name="detalhe-produto" component={DetalheProduto} options={{
                headerShown: false
            }} />



            <Stack.Screen name="cardapio" component={Cardapio} options={{
                headerShown: false
            }} />

            <Stack.Screen name="busca" component={Busca} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    </NavigationContainer>
}

export default RoutesAuth;