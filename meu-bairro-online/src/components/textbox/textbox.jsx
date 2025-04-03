import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style.js";


function TextBox() {
  return <>
  <Text>E-mail</Text>
  <TextInput style={styles.input}/>
  </>
};

export default TextBox;