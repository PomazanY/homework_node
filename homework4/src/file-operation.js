import "dotenv/config"
import * as fs from "node:fs/promises";
import path from "node:path";

const filename = path.resolve("src", process.env.FILENAME) ;

try{
    await  fs.writeFile(filename, "text")
    console.log("Created file");
    
}
catch(err){
    console.log(err);
    
}

