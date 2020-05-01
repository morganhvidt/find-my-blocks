require("dotenv").config();
const chalk = require("chalk");
const path = require("path");
const fg = require("fast-glob");
const fs = require("fs-extra");
const watch = require("glob-watcher");
const browserSync = require("browser-sync").create();

const source = path.join(__dirname, "../src/plugin");
const watchFiles = [
  `${source}/**/*.php`,
  `${source}/**/*.txt`,
  `${source}/**/*.svg`,
];

/**
 * Initilize browser sync
 */
const browserInit = () => {
  const { DEV_URL } = process.env;
  browserSync.init({
    proxy: DEV_URL,
    port: 1234,
  });
};

const browserReload = () => browserSync.reload();

/**
 * @param {string} from - Path to the original file
 * @param {string} to - Path to destination directory
 * @param {boolean} reload - Should we run browser sync reload
 */
const moveFile = (from, to, reload = false) => {
  const slug = from.replace(`${source}/`, "");
  to = `${to}/${slug}`;

  fs.copy(from, to)
    .then(console.log(chalk.bgGreenBright.black(`✔ ${slug} moved.`)))
    .then(reload && browserReload())
    .catch((err) => console.error(err));
};

/**
 * If a DEV_URL is not set in .env we want to hault development on WordPress
 */
const needsDevUrl = () => {
  console.clear();
  console.log(
    chalk.red('🛑 Set "DEV_URL" in your .env file before you can run wordpress')
  );
};

/**
 * When we build production, we want to get our latest tag and replace some
 * variables throughout PHP.
 * @param {string} dir
 * @param {string} tag
 */
const updateVersion = (dir, tag) => {
  fs.readFile(`${dir}/find-my-blocks.php`, "utf8", (err, data) => {
    if (err) return console.log(err);
    const result = data.replace(/{% VERSION %}/g, tag);
    fs.writeFile(`${dir}/find-my-blocks.php`, result, "utf8", (err) => {
      if (err) return console.log(err);
    });
  });
};

/**
 * Watch a glob of files for changes or additions.
 * @param {string} param0 - deconstructed path of output directory
 */
const runWatcher = ({ options: { outDir } }) => {
  const watcher = watch(watchFiles);
  watcher.on("change", (filePath) => moveFile(filePath, outDir, true));
  watcher.on("add", (filePath) => moveFile(filePath, outDir, true));
};

/**
 * Build our production code
 * @param {string} dest - output directory
 */
const build = async (dest) => {
  const stream = fg.stream(watchFiles);
  for await (const entry of stream) {
    moveFile(entry, dest);
  }
};

module.exports = {
  needsDevUrl,
  updateVersion,
  runWatcher,
  build,
  browserInit,
  browserReload,
};
