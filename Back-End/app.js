import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {connect} from './db.js'
import productRouter from './routes/productRoutes.js'
import './association.js'

const app =express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/api/products',productRouter)

await connect()
app.listen(process.env.PORT,(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start at "+ process.env.PORT);
    }
})
