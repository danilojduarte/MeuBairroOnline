import { Router } from "express";

const router = Router();


router.get("/teste", function(req, res){
  res.status(401).json({mensagem: "Senha Inválida"});
});

export default router;