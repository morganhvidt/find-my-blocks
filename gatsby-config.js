const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-165299430-1",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@fmb": path.resolve(path.join(__dirname, "..", "src")),
      },
    },
  ],
};
