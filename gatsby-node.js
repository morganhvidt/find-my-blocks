/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const path = require("path");

exports.onCreateWebpackConfig = ({
  stage,
  actions,
  loaders,
  getConfig,
}) => {
  const config = getConfig();

  if (stage.includes("html")) {
    config.module.rules.push({
        test: /@wordpress\/components/,
        use: loaders.null(),
    });
    config.module.rules.push({
      test: /.*\.(?:md|mdx)$/,
      use: path.resolve(path.join(__dirname, "..", "gatsby-null-md-loader.js")),
    });
  }

  actions.replaceWebpackConfig(config);
};
