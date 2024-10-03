// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";

const list = async () => {
  const sourceFolder = path.join(import.meta.dirname, "files");

  const isSourceFolderExists = await fs
    .access(sourceFolder)
    .then(() => true)
    .catch(() => false);

  if (!isSourceFolderExists) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fs.readdir(sourceFolder, { recursive: true });
    console.log(files);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await list();
