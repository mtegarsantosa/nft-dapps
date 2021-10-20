const fs = require("fs");
const { Module } = require("module");
const os = require("os");


function setEnvValue(key, value, path="./.env") {
    const ENV_VARS = fs.readFileSync(path, "utf8").split(os.EOL);
    const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
        return line.match(new RegExp(key));
    }));
    ENV_VARS.splice(target, 1, `${key}=${value}`);
    fs.writeFileSync(path, ENV_VARS.join(os.EOL));
}

module.exports = {setEnvValue}