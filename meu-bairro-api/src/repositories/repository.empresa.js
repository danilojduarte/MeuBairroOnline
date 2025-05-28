import { execute } from "../database/sqlite.js";


async function Destaques() {

  const sql = "select * from categoria order by ordem";
  const empresas = await execute(sql, []);

  return empresas;
}


export default { Destaques };