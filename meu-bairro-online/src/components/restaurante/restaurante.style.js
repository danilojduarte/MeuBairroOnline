import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  restaurante: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  logotipo:{
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  textos:{
    flex: 1,
    padding: 8,
  },
  nome:{
    color: COLORS.dark_gray,
    marginBottom: 4,
    fonSize:FONT_SIZE.sm,
  },
  endereco:{
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  favorito:{
    width: 30,
    height: 30,
  },
};
