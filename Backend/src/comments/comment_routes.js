import { Router } from "express";
import { getCommentByPublication, getComments, newComment } from "./comment_controller.js";

const comment = Router()
comment.get('/comment/:id',getCommentByPublication)
comment.get('/comment',getComments)
comment.post('/comment/register',newComment)


export default comment