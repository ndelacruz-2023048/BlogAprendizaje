import { Router } from "express";
import { getCommentByPublication, newComment } from "./comment_controller.js";

const comment = Router()
comment.get('/comment/:id',getCommentByPublication)
comment.post('/comment/register',newComment)


export default comment