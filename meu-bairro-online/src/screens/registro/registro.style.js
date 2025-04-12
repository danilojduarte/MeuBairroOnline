import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
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
  scrollView: {
    width: "100%",
  },
  footer: {
    width: "100%",
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    height: 70,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
};
