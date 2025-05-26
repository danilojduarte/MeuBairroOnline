

app.get("/teste", function(req, res){
  res.status(401).json({mensagem: "Senha Inválida"});
});