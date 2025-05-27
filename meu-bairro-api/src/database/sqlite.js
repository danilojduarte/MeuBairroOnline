import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

const db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
  if(err)
    return consolo.log("Erro ao conectar aobanco" + err.message);
});

export {db}