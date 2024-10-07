// implement function that parses command line arguments (given in format --propName value --prop2Name value2,
// you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
  const args = process.argv.slice(2);

  const argsObj = args.reduce((acc, curr, index, array) => {
    if (curr.startsWith("--")) {
      const key = curr.replace("--", "");
      const nextArg = array[index + 1];
      if (nextArg && !nextArg.startsWith("--")) {
        acc[key] = nextArg;
      } else {
        acc[key] = true;
      }
    }
    return acc;
  }, {});

  const argsString = Object.entries(argsObj)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(argsString);
};

parseArgs();
