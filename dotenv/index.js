const fs = require("fs");
const path = require("path");
const dotenv = require("./lib/main");
const chalk = require("chalk");

const { CONFIG_ENV } = process.env;
const config = CONFIG_ENV != null;

(function () {
  // check if CONFIG_ENV is defined
  if (config) {
    // split CONFIG_ENV into an array of strings
    const configs = CONFIG_ENV.split(",");
    // get root directory
    const root = process.cwd();

    // loop over configs array
    let i = 0;
    while (i < configs.length) {
      const config = configs[i];
      try {
        const envPath = path.resolve(root, `.env.${config}`);
        // check if "envPath" is a file that exists
        if (fs.statSync(envPath).isFile()) {
          // load env file
          dotenv.config({ path: envPath });

          console.log(
            chalk.greenBright(
              `\n[dotenv] Loaded 'env.${config}' environment variables.\n`
            )
          );
        }
      } catch (e) {
        // if file doesn't exist, show warning
        console.warn(
          chalk.yellow(
            `\n[dotenv] Unable to load '${config}' environment variables. An 'env.${config}' file was not found within the '${root}' directory.\n`
          )
        );
      } finally {
        i += 1;
      }
    }
  }
})();

module.exports = {
  config: dotenv.config,
  parse: dotenv.parse
};
