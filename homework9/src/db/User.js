import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";
import { emailValidation } from "../constants/users.constants.js";

const User = sequelize.define(
    "userhw",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "user with email already exist"
            },
            allowNull: false,
            validate: {
                is: {
                    args: emailValidation.value,
                    msg: emailValidation.message,
                }
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
            allowNull: false,
            validate: {
                isIn: {
                    args: [["superadmin", "admin", "user"]],
                    msg: "Role can be only superadmin, admin or user",
                }
            },
        },
    }
);

// User.sync({alter:true});

export default User;