import { COLORS, FONT_SIZE } from "../../constants/themes";

export const styles = {
  pedido:{
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 6
  },
  textos:{
    flex: 1,
    padding: 8,
  },
  containervalor:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  valor:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray,
  },
  status:{
    color: COLORS.green,
  },

};
  
