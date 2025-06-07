import RoutesOpen from "./routesOpen.js";
import RoutesAuth from "./routesAuth.js";

const user = {
  id_usuario: 1,
}

function Routes(){
 return isUserAuth ? <RoutesAuth /> : <RoutesOpen />


}
export default Routes;