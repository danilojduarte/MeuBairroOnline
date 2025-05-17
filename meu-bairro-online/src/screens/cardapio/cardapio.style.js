import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,    
  },
  containerFoto:{
    alignItems: "center",
  },
  foto:{
    height: 150,
  },
  containerBack:{
    position: "absolute",
    top: 30,
    left: 15,
  },
  back:{
    width: 40,
    height: 40,
  },
  header:{
    width: "100%",
    flexDirection: "row",
    padding: 10,
 },
 favoritoFull:{
  width: 40,
  height: 40,
 },
 headerTextos:{
  flex: 1,
 },
 nome:{
   fontSize: FONT_SIZE.medium,
   fontWeight: "bold",
   color: COLORS.black,
 },
 taxa:{
   fontSize: FONT_SIZE.small,
   color: COLORS.gray,
 },
};
