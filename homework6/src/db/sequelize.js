import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DATBASE_DIALECT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialectOptions: {
        ssl: true,
    }
})

export const connectDatabase = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connect to database");
        
    }
    catch(err){
        console.log(`Error connect to database ${err.message}`)
        throw err
        
    }
}
export default sequelize;