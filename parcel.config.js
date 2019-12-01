/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
const argv = require("minimist")(process.argv.slice(2));
const browserSync = require("browser-sync").create();
const Bundler = require("parcel-bundler");
const chalk = require("chalk");
const fg = require("fast-glob");
const fs = require("fs-extra");
const watch = require("glob-watcher");

const { OUTDIR, DEV_URL } = process.env;
const NODE_ENV = argv.env || "production";
const NEED_DEV_URL = NODE_ENV !== "production" && DEV_URL === undefined;

if (NEED_DEV_URL) {
  console.clear();
  console.log(chalk.red("✋🛑  STOP! 🛑✋"));
  console.log(chalk.red(`You need to set a 'DEV_URL' variable in your 
  .env file before you can 'npm start'`));
  process.exit();
}

const srcDir = "src";
const watchFiles = [`${ srcDir }/**/*.php`,];
const options = {
  outDir: OUTDIR !== undefined ? OUTDIR : "./dist",
  sourceMaps: NODE_ENV !== "production",
  production: NODE_ENV === "production",
  hmr: false,
  publicURL: "assets",
};

const reloadBrowsers = () => browserSync.reload();

const moveFile = (from, to, reload = false) => {
  from = `./${from}`;
  to = `${to}/${from.replace("src", "")}`;
  const file = from.substring(from.lastIndexOf("/") + 1);

  fs.copy(from, to)
    .then(console.log(chalk.bgGreenBright.black(`✔ ${file} moved.`)))
    .then(reload && reloadBrowsers())
    .catch(err => console.error(err));
};

const runWatcher = ({ options: { outDir } }) => {
  const watcher = watch(watchFiles);
  watcher.on("change", filePath => moveFile(filePath, outDir, true));
  watcher.on("add", filePath => moveFile(filePath, outDir, true));
};

const build = async dest => {
  const stream = fg.stream(watchFiles);
  for await (const entry of stream) {
    moveFile(entry, dest);
  }
};

async function runBundle(files) {
  const bundler = new Bundler(files, options);
  await bundler.bundle();
  await build(bundler.options.outDir);
  if (NODE_ENV !== "production") {
    console.clear();
    browserSync.init({ proxy: DEV_URL });
    runWatcher(bundler);
    bundler.on("bundled", async () => {
      reloadBrowsers();
    });
  }
}

runBundle(argv.f);
