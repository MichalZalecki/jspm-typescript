const cssnext = require("cssnext");
const fs      = require("fs");
const watch   = require("node-watch");
const program = require("commander");

program
  .version("0.0.1")
  .option("-s, --source [path]", "Source file")
  .option("-d, --destination [path]", "Destination file")
  .option("-w, --watch [path]", "Watch directory")
  .parse(process.argv);

function make() {
  const output = cssnext(
    fs.readFileSync(program.source, "utf8"),
    {from: program.source}
  );
  fs.writeFileSync(program.destination, output);
  console.log(`Created: ${program.destination}`);
}

make();

program.watch && watch(program.watch, make);
