import fs from "node:fs/promises";

const filepath = "./src/data/log.txt";

const logMessage =async (message)=>{
    await fs.appendFile(filepath, `\n${message}`);
}

export default logMessage;