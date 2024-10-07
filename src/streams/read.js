// implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout

import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  const stream = createReadStream(
    path.join(import.meta.dirname, "files", "fileToRead.txt"),
  );
  stream.on("data", (data) => {
    process.stdout.write(data);
  });
  stream.on("end", () => {
    console.log();
  });
  stream.on("error", (err) => {
    console.error(err);
  });
};

await read();
