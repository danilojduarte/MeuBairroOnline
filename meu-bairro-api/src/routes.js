import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria";

const router = Router();




//Rota Ususario Login
router.post("/usuarios/login", function(req, res){

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
});

//Rota Ususario Login
router.post("/usuarios", function(req, res){

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
});

router.get("/restaurantes", (req, res) => {
  
  //URI Params: http://localhost:3001/restaurantes/10
  //Query Params: http://localhost:3001/restaurantes?busca=Pizza (Somente com GET)

  
  const busca = req.query.busca;
  
  res.json([
    {restaurante: 1, nome: "Burguer King" },
    {restaurante: 2, nome: "McDonald's" },

  ]);
});

router.get("/categorias", controllerCategoria.Listar);

export default router;



//Anotações API - Aula 12(35:52) Criando Banco de dados e atribuindo itens ao db;