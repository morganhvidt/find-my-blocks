/**
 * Morgan Hvidt's WordPress Plugin Builder config file.
 *
 * @version 1.0
 *
 * @source Documentation and more info on https://morganhvidt.com/wordpress-plugin-builder
 * @author @morganhvidt on https://x.com/morganhvidt
 */
const WP_PLUGINS = [
  {
    name: "Find My Blocks",
    slug: "find-my-blocks",
    author: "Morgan Hvidt",
    version: "4.0.0-beta2",
    description: "",
    text_domain: "find-my-blocks",
    prefix: "fmb",
    prefix_capital: "FMB",
    type: "free",
    sourceFolder: "src/",
    productionFolder: "./production/find-my-blocks/",
    excludePatterns: ["**/assets/js/**", "src/library"],
    webpack: [
      {
        entry: "./src/assets/js/find-my-blocks.js",
        output: {
          filename: "find-my-blocks.js",
          path: "./production/find-my-blocks/assets/js",
        },
      },
    ],
  },
];

export default WP_PLUGINS;
