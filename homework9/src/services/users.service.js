import bcrypt from "bcrypt";
import User from "../db/User.js";

import HttpException from "../utils.js/HttpException.js"

export const addUser = async payload => {
    const hashPassword = await bcrypt.hash(payload.passwors, 10)
    return User.create({
        ...payload,
        password: hashPassword,
    })
};
export const changePassword = async (id, {oldPassword, newPassword})=>{
    const user = await User.findByPk(id);
    if(!user) return null;

    const passwordCompare = await bcrypt.compare(oldPassword, user.password);
    if(!passwordCompare) throw HttpException(400, "Old password invalid")

    const hashPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashPassword;
    await user.save();

    return user;
}

export const changeEmail = async (id, { password, newEmail }) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) throw HttpException(400, "Password invalid");

    if (newEmail === user.email) throw HttpException(400, "New email must be different from the current one");

    user.email = newEmail;
    await user.save();
    return user;
};

export const deleteUser = async (id, { password }) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) throw HttpException(400, "Password invalid");

    await user.destroy();
    return user;
};

export const getAdmins = async () => {
    const result = await User.findAll();

    const admins = result.filter(user => user.role === "admin");
    return admins;
};