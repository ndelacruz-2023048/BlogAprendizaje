import { Router } from "express";
import { getPublications, newPublication } from "./publication_controller.js";
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js";
import { deleteFileOnError } from "../../middlewares/delete.file.on.errors.js";

const publication = Router()
publication.get('/publication',getPublications)
publication.post('/publication/new',uploadProfilePicture.single('imagePublication'),deleteFileOnError,newPublication)

export default publication