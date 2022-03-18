const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('E:/Digiteaz_POS_Complete/Backend/backend/config/database')

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
})

//setting up config file
dotenv.config({path: 'E:/Digiteaz_POS_Complete/Backend/backend/config/config.env' })
//connecting to database
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
process.on(`unhandledRejection`,err=>{
    console.log(`shutting down the server due to unhandle promise rejection`);
    server.close(()=>{
        process.exit(2);
    })
})