// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API

import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import zlib from "zlib";
import path from "path";

const compress = async () => {
  const sourceFile = path.join(
    import.meta.dirname,
    "files",
    "fileToCompress.txt",
  );
  const destinationFile = path.join(import.meta.dirname, "files", "archive.gz");
  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destinationFile);

  pipeline(readStream, zlib.createGzip(), writeStream, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await compress();
