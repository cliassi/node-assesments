const config = {
  ENDPOINT: '/api',
  getDB: () => {
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('db.json');
    const db = low(adapter);

    db.defaults({ products: [] }).write();
    db.defaults({ users: [] }).write();
    return db;
  }

}

module.exports = config;