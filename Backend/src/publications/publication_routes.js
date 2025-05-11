import { Router } from "express";
import { getFilteredPublications, getPublicationById, getPublications, newPublication } from "./publication_controller.js";
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js";
import { deleteFileOnError } from "../../middlewares/delete.file.on.errors.js";

const publication = Router()
publication.get('/publication',getPublications)
publication.get('/publication/filter',getFilteredPublications)
publication.get('/publication/:idPublication',getPublicationById)
publication.post('/publication/new',uploadProfilePicture.single('imagePublication'),deleteFileOnError,newPublication)

export default publication