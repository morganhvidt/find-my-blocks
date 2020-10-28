const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-165299430-1",
      },
    },
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       "@fmb": path.join(__dirname, "src"),
    //     },
    //     extensions: ["js", "ts", "tsx", "jsx"],
    //   },
    // },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@fmb": path.resolve(path.join(__dirname, "..", "src")),
      },
    },
    // {
    //   resolve: `gatsby-alias-imports`,
    //   options: {
    //     aliases: {
    //       "@fmb": "src"
    //     }
    //   }
    // }
  ],
};
