import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Book = sequelize.define("book",{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
// Book.sync()

export default Book;