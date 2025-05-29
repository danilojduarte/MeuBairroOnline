import servicesUsuario from "../services/service.usuario.js";

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
  });
} else {
  res.status(401).json({error: "Email ou senha inválidos"});

}
}

async function Inserir(req, res){

  const {nome, email, senha, endereco, complemento, bairro, cidade, uf, cep} = req.body;  

  res.status(201).json({
    id_usuario: 7,
    nome, 
    email, 
    senha, 
    endereco, 
    complemento, 
    bairro, 
    cidade, 
    uf, 
    cep,
    inst: "@danilojduare",
  });
}


export default {Favoritos, Login, Inserir};