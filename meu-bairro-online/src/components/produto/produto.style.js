import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  produto: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  textos:{
    flex: 1,
    padding: 8,
  },
  nome:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
  descricao:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray,
  },
  valor:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    marginTop: 8,
  },
};
