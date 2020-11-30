/* eslint-disable max-lines */
const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");

const tag = argv.t;
const root = path.join(__dirname, "../");

/**
 * Gets a file and returns the content as a variable;
 * @param {string} path - The path to the file to read
 */
const getAndReadFile = (path) => {
  const file = path;
  const result = fs.readFileSync(file, "utf8", (data) => data);

  return result;
};

/**
 * Updates the version of the plugin based on the tag
 */
const updatePluginVersion = async () => {
  console.log(chalk.bgGreen.black(`⮕ Updating plugin version to ${tag}`));

  const file = path.join(root, "find-my-blocks.php");
  let result = getAndReadFile(file);
  result = result.replace(/{% VERSION %}/g, tag);
  fs.writeFileSync(file, result, "utf8");

  console.log(chalk.bgGreen.black("⮕ Plugin Version Updated"));
};

/**
 * Updates all of our build files that need it
 */
const updateBuildTags = async () => {
  console.log(chalk.bgGreen.black("⮕ Updating plugin version"));

  if (!tag) {
    console.log(chalk.bgYellow.black("⮕ No tag. Skipping plugin version"));
  } else {
    await updatePluginVersion();
  }

  console.log(chalk.bgGreen.black("⮕ Updated plugin version"));
};

updateBuildTags();
