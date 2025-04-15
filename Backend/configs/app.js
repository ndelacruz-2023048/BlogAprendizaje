import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet'
import publicationRoute from '../src/publications/publication_routes.js'

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use(publicationRoute)
}

export const initServer = ()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    } catch (error) {
        console.error('Server init failed',error)
    }
}
