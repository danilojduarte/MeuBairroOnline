import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    paddingTop: 35,
  },
  valores:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
  },
  valor:{
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
  },
  total:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    fontWeight: "bold",
  },
};
