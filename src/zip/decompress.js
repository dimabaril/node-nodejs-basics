// implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API

import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import zlib from "zlib";
import path from "path";

const decompress = async () => {
  const sourceFile = path.join(import.meta.dirname, "files", "archive.gz");
  const destinationFile = path.join(
    import.meta.dirname,
    "files",
    "fileToCompress.txt",
  );
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);

  pipeline(readStream, zlib.createGunzip(), writeStream, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await decompress();
