import {v2 as cloudinary} from 'cloudinary'
//Eliminar archivos si algo sale mal
import {unlink} from 'fs/promises'//Eliminar archivos
import {join} from 'path'//Unir carpetas o archivos o carpetas
import Publication from './publication_model.js'
import { log } from 'console'
import { loadavg } from 'os'
export const getPublications = async(request,response)=>{
    try {
        const all = await Publication.find()
        const taller = await Publication.find({typeClass:"taller"})
        const tecnologia = await Publication.find({typeClass:"tecnologia"})
        const practica = await Publication.find({typeClass:"practica"})
        
        
        response.status(200).send({success:true,message:"Publications list",data:all,taller,tecnologia,practica})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications'})
    }
}

export const getFilteredPublications = async(request,response)=>{
    try {
        const {typeClass,datePublication,titlePublication} = request.query
        const filterByName = {}
        const filterByOrder = {}
        if(typeClass) filterByName.typeClass = typeClass
        if(datePublication) filterByOrder.datePublication = datePublication === "asc" ?1:-1
        if(titlePublication) filterByOrder.titlePublication = titlePublication === "asc" ?1:-1
        console.log(filterByName,filterByOrder);
        const data = await Publication.find(filterByName).sort(filterByOrder)
        
        response.status(200).send({success:true,message:"Publications list",data})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications'})
    }
}

export const newPublication =async (request,response)=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    })
    console.log(request.body);
    const data = request.body

    try {
        const publication = new Publication(data)
        const filePath = join(request.filePath,request.file.filename)
        const results = await cloudinary.uploader.upload(filePath)
        const url = cloudinary.url(results.public_id)
        publication.imagePublication = url
        await publication.save()
        
        // await unlink(filePath)
        response.status(200).send({success:true,message:"New publication"})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications'})
    }
}

export const getPublicationById = async(request,response)=>{
    const params = request.params
    try {
        console.log(params);
        
        response.status(200).send({success:true})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications'})
    }
}

export const defaultPublications = async()=>{
    try {
        const dataDefault = [
            {
              "titlePublication": "Introducción a MongoDB con Node.js",
              "shortDescription": "Conecta tu app Node.js a MongoDB usando Mongoose.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746818461/1_V4iaGbN6rNaBa998EninKQ_iopjpr.png",
              "author": "Nery de la Cruz",
              "content": "Aprende a definir esquemas, modelos y realizar operaciones CRUD con MongoDB y Mongoose.",
              "typeClass": "tecnologia",
              "datePublication": "2025-05-09T12:00:00.000Z"
            },
            {
              "titlePublication": "Taller práctico de Express.js",
              "shortDescription": "Crea tu primer servidor con Express.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746818813/express-1_t2u83c.png",
              "author": "Nery de la Cruz",
              "content": "Durante este taller aprenderás a configurar rutas, middlewares y manejar errores con Express.js.",
              "typeClass": "taller",
              "datePublication": "2025-04-25T15:30:00.000Z"
            },
            {
              "titlePublication": "Cómo manejar formularios en React",
              "shortDescription": "Validación y control de formularios con React.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746818938/6062edb97e753aebe46a503e_DailyDotDevFrame2x_u4gfna.png",
              "author": "Nery de la Cruz",
              "content": "Explora cómo utilizar estados y eventos en React para manejar formularios de manera efectiva.",
              "typeClass": "practica",
              "datePublication": "2025-03-20T09:00:00.000Z"
            },
            {
              "titlePublication": "Autenticación con JWT en Node.js",
              "shortDescription": "Implementa login seguro usando JSON Web Tokens.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746819056/1_H4hkzEz8_umyeV4EXhnt0w_g2lwdv.png",
              "author": "Nery de la Cruz",
              "content": "Aprende a generar y verificar JWTs para proteger rutas y manejar sesiones de usuario.",
              "typeClass": "tecnologia",
              "datePublication": "2025-05-05T18:45:00.000Z"
            },
            {
              "titlePublication": "Taller MERN: construye una app completa",
              "shortDescription": "Integra MongoDB, Express, React y Node en una sola aplicación.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746819118/top-MERN-Stack_sglo1z.webp",
              "author": "Nery de la Cruz",
              "content": "Este taller te guía paso a paso para construir una aplicación MERN full-stack con autenticación y panel de control.",
              "typeClass": "taller",
              "datePublication": "2025-02-15T14:20:00.000Z"
            }
        ]
        const existDataDefault = await Publication.find({titlePublication:"Taller MERN: construye una app completa"})
        if(existDataDefault.length ===0){
            await Publication.insertMany(dataDefault)

        }
        
    } catch (error) {
        console.error(error)
    }
}