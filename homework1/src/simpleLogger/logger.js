import fs from "node:fs/promises";

const logMessage =async (message)=>{
    const filepath = "./src/data/log.txt";
    await fs.appendFile(filepath, `${message}`);

}

export default logMessage;