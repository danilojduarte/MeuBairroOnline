import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.styles.js";


function Button(props) {
    return <TouchableOpacity style={styles.btn}>
        <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
}

export default Button;