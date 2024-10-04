// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API

import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const filePath = path.join(
    import.meta.dirname,
    "files",
    "fileToCalculateHashFor.txt",
  );

  return new Promise((resolve, reject) => {
    const stream = createReadStream(filePath);

    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const result = hash.digest("hex");
      console.log(result);
      resolve(result);
    });

    stream.on("error", (err) => {
      console.error(err);
      reject(err);
    });
  });
};

await calculateHash();
