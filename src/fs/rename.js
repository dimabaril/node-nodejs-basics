// implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file
// wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";

const rename = async () => {
  const sourceFile = path.join(
    import.meta.dirname,
    "files",
    "wrongFilename.txt",
  );
  const destinationFile = path.join(
    import.meta.dirname,
    "files",
    "properFilename.md",
  );

  const [isSourceFileExists, isDestinationFileExists] = await Promise.all([
    fs
      .access(sourceFile)
      .then(() => true)
      .catch(() => false),
    fs
      .access(destinationFile)
      .then(() => true)
      .catch(() => false),
  ]);

  if (!isSourceFileExists || isDestinationFileExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.rename(sourceFile, destinationFile);
    console.log("File renamed successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await rename();
