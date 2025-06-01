import * as fs from "node:fs/promises";
import path from "node:path";

const dataPath = path.resolve("src", "task1", "myFolder")

async function createFolder() {
    try {
        await fs.mkdir(dataPath);
        return true;

    }
    catch {
        return false;
    }
}
const result = await createFolder();
const createdMessage = result ? "My folder created" : "Get new folder"
console.log(createdMessage);

// async function createIfNotExists(dataPath) {
//   try {
//     await fs.access(dataPath);
//     console.log("Папка уже существует:", dataPath);
//   } catch (err) {
//     console.log("Папка не существует. Создаю...");
//     await fs.mkdir(dataPath);
//     console.log("Папка создана:", dataPath);
//   }}
// createIfNotExists(dataPath);

async function deleteFolder() {
    try {
        await fs.rmdir(dataPath);
        return true;
    }
    catch {
        return false;
    }
}
const resultDelete = await deleteFolder();
const resultDeleteMessage = resultDelete ? "successful delete" : "try again";
console.log(resultDeleteMessage);

