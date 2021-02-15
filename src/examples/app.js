const exampleToRun = process.argv[2];
if (!exampleToRun) {
  return;
}

const filePath = `./example_${exampleToRun}.js`;
require(filePath);
