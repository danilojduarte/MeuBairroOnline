import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 40,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 25,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
};
