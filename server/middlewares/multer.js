import multer from "multer";

export const multerUpload = multer({
    limits:{
        fieldSize:1024 * 1024 * 5
    }
})