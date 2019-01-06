import express from 'express' 
import mongoose from 'mongoose'
import dotenv from 'dotenv/config'

//APP INIT
let app = express()

//DB CONNECTION
mongoose.connect(process.env.DB, { useNewUrlParser: true }, err => {
    if (err) {
        throw err
    } else {
        console.log('Database successully connected')
        //RUNNING SERVER
        app.listen(process.env.PORT, () => {
            console.log('App listens on port ' + process.env.PORT)
        })
    }
})