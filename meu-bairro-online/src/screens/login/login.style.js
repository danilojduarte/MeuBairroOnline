import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  formGroup: {
    width: "100%",
    marginTop: 40,
    marginBottom: 30,
  },
  form: {
    width: "100%",
    marginBottom: 25,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 20,
    marginBottom: 40,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
};
