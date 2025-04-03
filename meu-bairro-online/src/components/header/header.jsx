import { Image, Text } from "react-native";
import { styles } from "./header.style.js";
import icons from "../../constants/icons.js";

function Header() {
  return <>
  <Image style={styles.logo}/>
  <Text>Acesse sua conta</Text>
  </>
}

export default Header;