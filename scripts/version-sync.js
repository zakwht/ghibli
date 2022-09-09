const fs = require("fs");

let manifest = require("../public/manifest.json");
let version = require("../package.json").version;

if (manifest.version !== version) {
  console.log("Sync build version: ", version);
  manifest.version = require("../package.json").version;

  fs.writeFile(
    "./public/manifest.json",
    JSON.stringify(manifest, null, 2),
    (err) => err && console.error(err)
  );
}
