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