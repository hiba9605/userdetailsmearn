require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./config/connection')

const pfServer=express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)



const PORT=3000

pfServer.listen(PORT,()=>{
    console.log(`project fair server at port:${PORT} and waiting of client request`);
    
})

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red" > Project Fair Server started  and waiting for client request</h1>`)
})