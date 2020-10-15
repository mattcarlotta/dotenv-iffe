require("./dotenv");
// const { config } = require("dotenv");
// config({ path: ".env.test" });
const chalk = require("chalk");

console.log(chalk.cyan(`process.env.PORT: ${process.env.PORT}\n`));
console.log(chalk.cyan(`process.env.DB: ${process.env.DB}\n`));
console.log(chalk.cyan(`process.env.BASE: ${process.env.BASE}\n`));
