const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");

const root = path.join(__dirname, "../src/");

const getReadme = async () => {
  const readme = path.join(root, "plugin/readme.txt");
  const results = fs.readFileSync(readme, "utf8", (err, data) => {
    if (err || data == undefined) {
      console.log(chalk.red("Something went wrong collecting readme"));
      return;
    }
    return data;
  });
  return results;
};

const updateDescription = async (current) => {
  const description = path.join(root, "markdown/Index.mdx");
  let result = fs.readFileSync(description, "utf8", (data) => data);

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

  return current.replace(/{% DESCRIPTION %}/g, result);
};

const updateChangelog = async (current) => {
  const changelog = path.join(root, "markdown/CHANGELOG.md");
  let result = fs.readFileSync(changelog, "utf8", (data) => data);

  result = result.replace(
    `---
name: Changelog
route: /changelog
---

# Changelog`,
    ""
  );
  return current.replace(/{% CHANGELOG %}/g, result);
};

const buildReadme = async () => {
  const results = await getReadme()
    .then((data) => updateDescription(data))
    .then((data) => updateChangelog(data));

  fs.writeFile("readme.txt", results, "utf8", (err) => {
    if (err) return console.log(err);
  });
};

module.exports = {
  buildReadme,
};
