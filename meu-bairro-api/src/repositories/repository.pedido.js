import { execute } from "../database/sqlite.js";


async function Listar() {

  const sql = `select p.*, e.nome, e.icone
  from pedido p
  join empresa e on (e.id_empresa = p.id_empresa)
  order by p.id_pedido desc`;

  const pedidos = await execute(sql, []);

  return pedidos;
}

async function ListarId(id_pedido) {

  const sql = `select p.*, e.nome, e.icone
  from pedido p
  join empresa e on (e.id_empresa = p.id_empresa)
  where p.id_pedido = ?
  order by p.id_pedido desc`;

  const pedidos = await execute(sql, [id_pedido]);

  return pedidos;
}


export default { Listar, ListarId };