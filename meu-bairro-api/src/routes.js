import { Router } from "express";

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

router.get("/categorias", (req, res) => {
  
  //Query Params: http://localhost:3001/categorias

  
  const busca = req.query.busca;
  
  res.json([
    {id_categoria: 1, categoria: "Burguers" },
    {id_categoria: 2, categoria: "Pizza" },
    {id_categoria: 3, categoria: "Fritas" },

  ]);
});

export default router;



//Anotações API - Aula 11(00:00) Finalizada, iniciada criação API;