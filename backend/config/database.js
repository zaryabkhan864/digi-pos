// const mongoose = require('mongoose')

// const connectDatabase = () =>{
//     mongoose.connect(process.env.DB_LOCAL_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//      }).then(con=>{
//         console.log(`MongoDB connected with HOST :${con.connection.host}`)
//     })
// }

// module.exports = connectDatabase
const mysql = require('mysql')


const connectDatabase = () =>{
    const pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'localhost',
        user            : 'root',
        password        : '',
        database        : 'digi-pos'
    })
    return pool
}




module.exports = connectDatabase