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
 * Gets the readme file
 */
const getReadme = async () => {
  console.log(chalk.bgGreen.black("⮕ Getting readme.txt file"));
  const file = path.join(root, "readme.txt");
  let result = getAndReadFile(file);
  console.log(chalk.bgGreen.black("⮕ Got the readme.txt file"));
  return result;
};

/**
 * updates the description of the readme
 * @param {string} current current readme.txt
 */
const updateReadmeDescription = async (current) => {
  console.log(chalk.bgGreen.black("⮕ Getting the description"));
  const file = path.join(root, "src/markdown/Index.mdx");
  let result = getAndReadFile(file);
  result = result.replace(
    `---
name: Find My Blocks
route: /
---

import { Playground, Props } from 'docz';
import { Logo } from '../components/Logo';
import { Link } from '../components/Link';

<p>
    <Logo size={100} />
</p>

# Find My Blocks`,
    ""
  );

  result = result.replace(
    `<br />

View a demo of the plugin [here](/demo).
`,
    ""
  );
  console.log(chalk.bgGreen.black("⮕ Description Updated"));
  return current.replace(/{% DESCRIPTION %}/g, result);
};

/**
 * updates the changelog of the readme
 * @param {string} current current readme.txt
 */
const updateReadmeChangelog = async (current) => {
  console.log(chalk.bgGreen.black("⮕ Getting the changelog"));
  const file = path.join(root, "src/markdown/Changelog.md");
  let result = getAndReadFile(file);
  result = result.replace(
    `---
name: Changelog
route: /changelog
---

# Changelog`,
    ""
  );
  console.log(chalk.bgGreen.black("⮕ Changelog Updated"));
  return current.replace(/{% CHANGELOG %}/g, result);
};

/**
 * Updates all of our build files that need it
 */
const updateBuildTags = async () => {
  console.log(chalk.bgGreen.black("⮕ Updating built files"));

  if (!tag) {
    console.log(chalk.bgYellow.black("⮕ No tag. Skipping plugin version"));
  } else {
    await updatePluginVersion();
  }

  await getReadme()
    .then((data) => updateReadmeDescription(data))
    .then((data) => updateReadmeChangelog(data))
    .then((data) => {
      console.log(chalk.bgGreen.black("⮕ Writing new readme.txt"));
      fs.writeFileSync(path.join(root, "readme.txt"), data, "utf8");
    });

  console.log(chalk.bgGreen.black("⮕ Wrote new readme.txt"));
};

updateBuildTags();
