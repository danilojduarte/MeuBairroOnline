import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function execute(comand, params, method = "all") {
  return new Promise((resolve, reject) => {
    db[method](comand, params, (error, results) => {
      if (error)
        reject(error)
      else 
        resolve(results);
    })
  });
}

const db = new SQLite.Database("./src/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
  if(err)
    return console.log("Erro ao conectar ao banco" + err.message);
});

export { db, execute };
// This code connects to a SQLite database and provides a function to execute SQL commands.