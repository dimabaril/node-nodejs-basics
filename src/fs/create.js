// implement function that creates new file fresh.txt with content I am fresh and young
// inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";

const create = async () => {
  const content = "I am fresh and young";
  const filePath = path.join(import.meta.dirname, "files", "fresh.txt");

  const isFileExists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);

  if (isFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.writeFile(filePath, content);
    console.log("File created successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await create();
