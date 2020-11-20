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
