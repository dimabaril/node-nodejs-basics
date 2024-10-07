// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";

const read = async () => {
  const sourceFile = path.join(import.meta.dirname, "files", "fileToRead.txt");

  const isSourceFileExists = await fs
    .access(sourceFile)
    .then(() => true)
    .catch(() => false);

  if (!isSourceFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    const content = await fs.readFile(sourceFile, { encoding: "utf8" });
    console.log(content);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await read();
