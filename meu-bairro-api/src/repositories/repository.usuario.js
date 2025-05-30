  import { execute } from "../database/sqlite.js";


async function Favoritos(id_usuario) {

  const sql = `select f.*, e.icone, e.nome, e.endereco, e.complemento, e.bairro, e.cidade, e.uf
from usuario_favorito f
join empresa e on (e.id_empresa = f.id_empresa)
where f.id_usuario = ?`;

  const favoritos = await execute(sql, []);

  return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep){

  const sql = `insert into usuario (nome, email, senha, endereco, complemento, bairro, cidade, uf, cep,  dt_cadastro)
  values (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP);
select last_insert_rowid() as id_usuario`;

  const usuario = await execute(sql, [nome, email, senha, endereco, complemento, bairro, cidade, uf, cep]);

  return usuario;
}

export default { Favoritos, Inserir };