import {v2 as cloudinary} from 'cloudinary'
//Eliminar archivos si algo sale mal
import {unlink} from 'fs/promises'//Eliminar archivos
import {join} from 'path'//Unir carpetas o archivos o carpetas
import Publication from './publication_model.js'
export const getPublications = (request,response)=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        secure:true
    })

    const url = cloudinary.url('128120_916f02d6dec04c2398c216df0e14a3b6_mv2_simjhf')


    try {
        
        response.status(200).send({success:true,message:"Publications list",url})
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
    try {
        const filePath = join(request.filePath,request.file.filename)
        const results = await cloudinary.uploader.upload(filePath)
        const url = cloudinary.url(results.public_id)
        log
        await unlink(filePath)
        response.status(200).send({success:true,message:"New publication"})
    } catch (error) {
        console.error(error)
        return response.status(500).send({message:'General error sending publications'})
    }
}