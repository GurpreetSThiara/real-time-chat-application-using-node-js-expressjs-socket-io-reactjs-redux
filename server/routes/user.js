import express from 'express'
import { login } from '../controllers/user.controller.js';
import { multerUpload } from '../middlewares/multer.js';

const userRoute = express.Router();

userRoute.post('/register',multerUpload.single("avatar"),login)
userRoute.post('/login',login)

export default userRoute