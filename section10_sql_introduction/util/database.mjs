const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:''
});

module.exports = pool.promise();

// -------------------------MJS FILE SYSTEM -------------------------


// import { createPool } from 'mysql2';

// const pool = createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:''
// });

// export default pool.promise();
