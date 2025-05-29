import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";

const router = Router();

// Empresas
router.get("/categorias", controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);
router.get("/empresas/destaques", controllerEmpresa.Destaques);

// Pedidos
router.get("/pedidos", controllerPedido.Listar);
router.get("/pedidos/:id_pedido", controllerPedido.ListarId);


// Usuarios
router.get("/usuarios/favoritos", controllerUsuario.Favoritos);
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);


export default router;



//Anotações API - Aula 13(41:31) criando rotas para meus pedidos;


// router.get("/restaurantes", (req, res) => {
  
  //URI Params: http://localhost:3001/restaurantes/10
  //Query Params: http://localhost:3001/restaurantes?busca=Pizza (Somente com GET)

  
//   const busca = req.query.busca;
  
//   res.json([
//     {restaurante: 1, nome: "Burguer King" },
//     {restaurante: 2, nome: "McDonald's" },

//   ]);
// });