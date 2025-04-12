import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style.js";


function TextBox(props) {
    return <>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.isPassword}
            // removendo a areo function onChangeText={(texto) => props.onChangeText(texto)}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </>
}

export default TextBox;