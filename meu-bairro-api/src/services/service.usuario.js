import repositoryUsuario from "../repositories/repository.usuario.js";
import bcrypt from "bcrypt";



async function Favoritos(id_usuario){

  const favoritos = await repositoryUsuario.Favoritos(id_usuario);

  return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep){

  const hashSenha = await bcrypt.hashSync(senha, 10);
  
  const usuario = await repositoryUsuario.Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep);

  return usuario;
}

export default {Favoritos, Inserir};