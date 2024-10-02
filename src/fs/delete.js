// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const sourceFile = path.join(
    import.meta.dirname,
    "files",
    "fileToRemove.txt",
  );

  const isSourceFileExists = await fs
    .access(sourceFile)
    .then(() => true)
    .catch(() => false);

  if (!isSourceFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.rm(sourceFile);
    console.log("File removed successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await remove();
