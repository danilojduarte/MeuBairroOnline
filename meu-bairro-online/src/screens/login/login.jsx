import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState("");

  function ProcessarLogin() {
    email = "12345...";
    console.log("OK!");
  }

  return <View style={styles.container}>
    <Header texto="Acesse sua conta"/>

    <View style={styles.formGroup}>
      <View style={styles.form}>
        <TextBox label="E-mail" />
      </View>

      <View style={styles.form}>
        <TextBox label="Senha" isPassword={true} />  
      </View>

      <View style={styles.form}>
        <Button texto="Acessar" onPress={ProcessarLogin}/>
      </View>

    </View>

    <View style={styles.footer}>
      <TouchableOpacity>
        <Text style={styles.footerText}>Criar Minha Conta</Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default Login;