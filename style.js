var cssnext = require("cssnext");
var fs = require("fs");

var source = "./app/cssnext/style.css";
var output = cssnext(
  fs.readFileSync(source, "utf8"),
  {from: source}
);

fs.writeFileSync("app/style.css", output);
