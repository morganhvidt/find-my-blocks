const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@wordpress\/components/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateNode = ({ node }) => {
  /**
   * Update the changelog on build from the changelog in the readme.
   */
  if (process.env.NODE_ENV === "production") {
    if (node.context && node.context.frontmatter) {
      if (node.context.frontmatter.name === "Changelog") {
        /**
         * Get the readme as a variable
         */
        const readme = path.join(
          __dirname,
          "..",
          "src",
          "plugin",
          "readme.txt"
        );
        const readmeFile = getAndReadFile(readme);

        /**
         * Split the readme to an array based on the changelog heading
         */
        const changelog = readmeFile.split("== Changelog ==");

        /**
         * Append the changelog to the changelog file
         */
        const changelogMdx = node.component;
        let changelogMdxFile = getAndReadFile(changelogMdx);

        changelogMdxFile = changelogMdxFile.concat(
          changelog[changelog.length - 1]
        );

        fs.writeFileSync(changelogMdx, changelogMdxFile, "utf8");

        console.log(chalk.bgGreen.black("The changelog has been updated!"));
      }
    }
  }

  /**
   * Gets a file and returns the content as a variable;
   * @param {string} path - The path to the file to read
   */
  function getAndReadFile(path) {
    const file = path;
    const result = fs.readFileSync(file, "utf8", (data) => data);

    return result;
  }
};
