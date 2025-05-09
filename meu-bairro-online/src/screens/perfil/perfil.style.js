import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  icone: {
    width: 30,
    height: 30,
  },
  textos: {
    flex: 1,
    marginLeft: 10,
  },
  containerIcone: {
    justifyContent: "center",
  },
};
