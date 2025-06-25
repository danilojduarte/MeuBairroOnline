import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  headerBar:{
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 164,
    height: 55,
    marginTop: 2,
  },
  cart: {
    width: 30,
    height: 30,
    
  },
  busca:{
    marginBottom: 10,
    marginTop: 20,
  },
  destaques: {
    colors: COLORS.dark_gray,
    fontWeight: "bold",
    marginTop: 10,
  },
};
