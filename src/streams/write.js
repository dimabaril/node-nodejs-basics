// implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

import { createWriteStream } from "fs";
import path from "path";

const write = async () => {
  const stream = createWriteStream(
    path.join(import.meta.dirname, "files", "fileToWrite.txt"),
  );
  //   process.stdin.on("data", (data) => {
  //     stream.write(data);
  //   });
  process.stdin.pipe(stream);
  process.stdin.on("error", (err) => {
    console.error(err);
  });
};

await write();
