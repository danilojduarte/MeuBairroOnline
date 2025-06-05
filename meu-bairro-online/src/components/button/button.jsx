import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";


function Button(props) {
    return <TouchableOpacity style={[styles.btn, props.isLoading ? styles.loading : ""]}
    disabled={props.isLoading}
    onPress={props.onPress}>
    <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
}

export default Button;