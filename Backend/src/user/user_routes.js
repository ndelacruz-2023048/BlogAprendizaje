import { Router } from "express";
import {createUser,getUser} from "../user/user_controller.js"

const user = Router()

user.post('/user/register', createUser);
user.get('/user/:id', getUser);

export default user