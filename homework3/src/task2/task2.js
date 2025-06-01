import * as fs from "node:fs/promises";
import path from "node:path";

const filePath = path.resolve("src", "task2", "info.txt")
const writeFile = async () => {
    try {
        await fs.writeFile(filePath, "Node.js is awesome!")
    }
    catch (err) {
        console.error(err.message);
    }

}
writeFile()

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

readFile();