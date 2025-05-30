import servicesUsuario from "../services/service.usuario.js";
import jwt from "../token.js";

async function Favoritos(req, res) {
  try {
    const id_usuario = 1;
    const favoritos = await servicesUsuario.Favoritos(id_usuario);

    res.status(200).json(favoritos);
  } catch (error) {
    res.status(500).json({error});
  }
};

async function Login(req, res) {

  const {email, senha} = req.body;

  if (email == "teste@teste.com" && senha == "12345") {
    res.status(200).json({
      id_usuario: 7,
      email:"teste@teste.com",
      nome: "Danilo Duart",
      inst: "@danilojduare",
      token: jwt.CreateJWT(123),
  });
} else {
  res.status(401).json({error: "Email ou senha inválidos"});

}
}

async function Inserir(req, res){

  try {

      const {nome, email, senha, endereco, complemento, bairro, cidade, uf, cep} = req.body;

      const usuario = await servicesUsuario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

      usuario.token = jwt.CreateJWT(usuario.id_usuario);

      res.status(201).json(usuario);  
    } catch (error) {
      res.status(500).json({error});
    }
}


export default {Favoritos, Login, Inserir};