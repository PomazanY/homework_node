import { UniqueConstraintError, UnknownConstraintError, ValidationError } from "sequelize";

const errorHandler = (error, _, res, __)=>{
    if(!error.status){
        if(error instanceof UnknownConstraintError){
            error.status=409;
        }
        else if( error instanceof ValidationError){
            error.status = 400;
        }
    }
    const {status = 500, message}= error;
    res.status(status).json({
        message,
    })
}
export default errorHandler