import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const sourceFolder = path.join(import.meta.dirname, "files");
  const destinationFolder = path.join(import.meta.dirname, "files_copy");

  const [isSourceFolderExists, isDestinationFolderExists] = await Promise.all([
    fs
      .access(sourceFolder)
      .then(() => true)
      .catch(() => false),
    fs
      .access(destinationFolder)
      .then(() => true)
      .catch(() => false),
  ]);

  if (!isSourceFolderExists || isDestinationFolderExists) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.cp(sourceFolder, destinationFolder, { recursive: true });
    console.log("Directory copied successfully");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await copy();
