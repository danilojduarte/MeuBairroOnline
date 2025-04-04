import { View } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";


function Login() {
  return <View style={styles.container}>
    <Header texto="Acesse sua conta"/>

    <View style={styles.formGroup}>
      <View style={styles.form}>
        <TextBox label="E-mail" />
      </View>
      <View style={styles.form}>
        <TextBox label="Senha" isPassword={true} />  
      </View>
    </View>
  </View>
}

export default Login;