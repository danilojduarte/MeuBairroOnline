import { createContext } from "react";

const AuthContext = createContext({});


function AuthProvider(props){

  const user = {
    id_usuario: 1,
  }

  return <AuthContext.Provider value={props.value}>
    {props.children}
  </AuthContext.Provider>
}

export { AuthProvider, AuthContext };

