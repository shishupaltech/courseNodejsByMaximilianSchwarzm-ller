const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;let _db;
const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://myname:WQbVHkyWeRNh0Dnv@cluster0.ocoto71.mongodb.net/test'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db('test');
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw 'No database found';
}
// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb =getDb;

