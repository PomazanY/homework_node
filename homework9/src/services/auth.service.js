import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

import User from "../db/User.js"

import HttpException from "../utils.js/HttpException.js"

const { JWT_SECRET } = process.env

export const login = async ({ email, password }) => {
    const user = await User.findOne({
        where: {
            email,
        }
    })
    if (!user) throw HttpException(401, `User with email ${email} not found`)

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) throw HttpException(401, "Password invalid");

    const payload = {
        id: user.id
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
    return token;
}