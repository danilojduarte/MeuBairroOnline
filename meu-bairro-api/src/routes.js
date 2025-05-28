import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";

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
router.get("/banners", controllerBanner.Listar);

router.get("/empresas/destaques", controllerEmpresa.Destaques);
router.get("/pedidos", controllerPedido.Listar);
router.get("/pedidos/:id_pedido", controllerPedido.ListarId);


export default router;



//Anotações API - Aula 13(41:31) criando rotas para meus pedidos;