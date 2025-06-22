import jwt from "jsonwebtoken";

import * as usersService from "../services/users.service.js"

import HttpException from "../utils.js/HttpException.js";
import validateBody from "../utils.js/validateBody.js";

import { addUserSchema, changePasswordSchema, changeEmailSchema, deleteUserSchema } from "../validation/users.schema.js";

const { JWT_SECRET } = process.env;

const getToken = (headers) => {
    const { authorization } = headers;
    if (!authorization) throw HttpException(401, "Authorization header missing");

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw HttpException(401, "Bearer missing");

    return token;
};

export const addUserController = async (req, res) => {
    await ValidationError(addUserSchema, req.body);
    const result = await usersService.addUser(req.body)

    res.status(201).json({
        message: `user with email ${result.email} added`
    })

};

export const changePasswordController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(changePasswordSchema, req.body)

    const result = await usersService.changePassword(id, req.body);
    if (!result) throw HttpException(404, `User wiyh id=${id} not found`)

    res.json({
        message: "Password change successfully"
    })
}

export const changeEmailController = async (req, res) => {
    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    await validateBody(changeEmailSchema, req.body)
    const result = await usersService.changeEmail(id, req.body);
    if (!result) throw HttpException(404, `User with id=${id} not found`);

    res.json({
        message: "Email change successfully"
    });

}

export const deleteUserController = async(req, res)=>{
    await validateBody(deleteUserSchema, req.body);

    const token = getToken(req.headers)
    const { id } = jwt.verify(token, JWT_SECRET);

    const result = await usersService.deleteUser(id, req.body);
    if (!result) throw HttpException(404, `User with id=${id} not found`);

    res.json({
        message: "User delete successfully"
    });
}

export const getAdminsController = async (req, res) => {
    const result = await usersService.getAdmins();

    res.json(result);
}