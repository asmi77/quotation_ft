import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv/config'

//APP INIT
let app = express()

//ROUTES IMPORT 
import contact from './routes/contact/contact'
import content from './routes/content/content'
import corporation from './routes/corporation/corporation'
import functions from './routes/functions/functions'
import project from './routes/project/project'
import support from './routes/support/support'
import training from './routes/training/training'

//ROUTING INIT
let router = express.Router()

//ROUTING MIDDLEWARE
app.use(router)

// ROUTING OBJECTS
router.use('/contact', contact)
router.use('/content', content)
router.use('/corporation', corporation)
router.use('/functions', functions)
router.use('/project', project)
router.use('/support', support)
router.use('/training', training)

//DB CONNECTION
mongoose.connect(process.env.DB, { useCreateIndex: true, useNewUrlParser: true }, err => {
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