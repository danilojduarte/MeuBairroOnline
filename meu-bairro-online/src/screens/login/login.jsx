import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";
import api from "../../constants/api.js";

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    async function ProcessarLogin() {
        
      try {
        const response = await api.post("/usuarios/login", {email, senha});
        Alert.alert("Sucesso");
      } catch (error) {
        if (error.response?.data.error)
            Alert.alert(error.response.data.error);
        else
            Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
      }
    }  

    return <View style={styles.container}>
        <Header texto={email} />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="E-mail"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email} />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={false}
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha} />
            </View>

            <View style={styles.form}>
                <Button texto="Acessar" onPress={ProcessarLogin} />
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
                <Text style={styles.footerText}>Criar minha conta.</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;