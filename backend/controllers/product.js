const catchAsyncErrors = require('../middlewares/catchAsyncError')
const connectDatabase = require('E:/Digiteaz_POS_Complete/Backend/backend/config/database.js')
const pool = connectDatabase()
exports.getProducts = catchAsyncErrors( async (req,res,next) =>{
   pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
     connection.query('SELECT * from product', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
})