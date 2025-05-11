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
        const publication = await Publication.findById(params.idPublication)
        response.status(200).send({success:true,publication})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications by id'})
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
              "content": "Aprende a definir esquemas y modelos de datos utilizando MongoDB junto con Mongoose, una poderosa biblioteca de modelado de objetos para Node.js. Conoce cómo estructurar tus colecciones, establecer validaciones, tipos de datos y relaciones entre documentos para garantizar una base de datos coherente, escalable y bien organizada. Dominar estas herramientas te permitirá construir aplicaciones más robustas y fáciles de mantener. Además, adquirirás habilidades prácticas para realizar operaciones CRUD (crear, leer, actualizar y eliminar) de forma eficiente y segura. Aprenderás a interactuar con la base de datos desde tu aplicación backend, gestionar consultas complejas, manejar errores y optimizar el rendimiento de tus peticiones. Esta base te servirá como pilar para desarrollar proyectos modernos con bases de datos NoSQL",
              "typeClass": "tecnologia",
              "datePublication": "2025-05-09T12:00:00.000Z"
            },
            {
              "titlePublication": "Taller práctico de Express.js",
              "shortDescription": "Crea tu primer servidor con Express.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746818813/express-1_t2u83c.png",
              "author": "Nery de la Cruz",
              "content": "Durante este taller aprenderás a configurar rutas de forma eficiente utilizando Express.js, el framework más popular para construir aplicaciones web en Node.js. Descubrirás cómo estructurar tus rutas de manera modular, organizar controladores y definir diferentes métodos HTTP para manejar solicitudes del cliente de forma clara y ordenada. Esta estructura es esencial para desarrollar APIs limpias, escalables y fáciles de mantener. Además, te adentrarás en el uso de middlewares, herramientas fundamentales en Express que te permiten interceptar y procesar solicitudes antes de que lleguen a su destino. Aprenderás a implementar middlewares personalizados, así como a manejar errores globalmente, garantizando una gestión robusta y profesional de los fallos que puedan surgir en tu aplicación. Este conocimiento es clave para desarrollar aplicaciones más seguras y confiables.",
              "typeClass": "taller",
              "datePublication": "2025-04-25T15:30:00.000Z"
            },
            {
              "titlePublication": "Cómo manejar formularios en React",
              "shortDescription": "Validación y control de formularios con React.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746818938/6062edb97e753aebe46a503e_DailyDotDevFrame2x_u4gfna.png",
              "author": "Nery de la Cruz",
              "content": "Explora cómo utilizar estados y eventos en React para gestionar formularios de manera dinámica y eficiente. Aprenderás a controlar los valores de entrada mediante el uso de estados (useState), permitiéndote capturar y actualizar datos en tiempo real conforme el usuario interactúa con los formularios. Esta técnica es esencial para crear interfaces reactivas y personalizadas que respondan adecuadamente a las acciones del usuario.También profundizarás en el manejo de eventos en React, como onChange, onSubmit, entre otros, que permiten detectar e intervenir en las distintas fases del proceso de llenado y envío de formularios. Dominar estas herramientas te permitirá implementar validaciones, controlar errores y mejorar la experiencia del usuario al interactuar con los formularios de tu aplicación. Esta combinación de estados y eventos es una de las bases para construir aplicaciones web modernas y funcionales.",
              "typeClass": "practica",
              "datePublication": "2025-03-20T09:00:00.000Z"
            },
            {
              "titlePublication": "Autenticación con JWT en Node.js",
              "shortDescription": "Implementa login seguro usando JSON Web Tokens.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746819056/1_H4hkzEz8_umyeV4EXhnt0w_g2lwdv.png",
              "author": "Nery de la Cruz",
              "content": "Aprende a generar y verificar JSON Web Tokens (JWTs) como parte fundamental de la autenticación y seguridad en aplicaciones web modernas. Comprenderás cómo crear tokens seguros que contengan la información necesaria para identificar a un usuario sin necesidad de almacenar su sesión en el servidor. Esta técnica es ampliamente utilizada por su eficiencia y escalabilidad, especialmente en aplicaciones distribuidas o con arquitecturas sin estado (stateless).Además, profundizarás en cómo proteger rutas privadas y manejar sesiones de usuario utilizando JWTs. Aprenderás a implementar middlewares que validen los tokens antes de conceder acceso a ciertas funcionalidades, garantizando que solo los usuarios autenticados puedan interactuar con recursos sensibles. Esta práctica es esencial para construir aplicaciones seguras y robustas, manteniendo la integridad y confidencialidad de la información del usuario.",
              "typeClass": "tecnologia",
              "datePublication": "2025-05-05T18:45:00.000Z"
            },
            {
              "titlePublication": "Taller MERN: construye una app completa",
              "shortDescription": "Integra MongoDB, Express, React y Node en una sola aplicación.",
              "imagePublication": "https://res.cloudinary.com/dtmwybty7/image/upload/v1746819118/top-MERN-Stack_sglo1z.webp",
              "author": "Nery de la Cruz",
              "content": "Esta clase te guía paso a paso en la construcción de una aplicación MERN (MongoDB, Express.js, React y Node.js) de principio a fin. Aprenderás cómo integrar cada una de estas tecnologías para crear una solución full-stack sólida y funcional. Desde la configuración del backend hasta la creación del frontend interactivo, comprenderás cómo cada parte del stack se conecta y trabaja en conjunto para ofrecer una experiencia de usuario fluida. Además, el enfoque del taller está en desarrollar una autenticación segura y un panel de control (dashboard) donde los usuarios puedan gestionar su información y realizar acciones específicas según su rol. Implementarás protección de rutas, gestión de sesiones y estructuras modulares que te prepararán para desarrollar aplicaciones escalables y seguras en proyectos reales. Este taller es ideal para quienes desean ver cómo se unen todos los conceptos aprendidos en una aplicación profesional y completa.",
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