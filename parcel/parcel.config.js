require("dotenv").config();
const argv = require("minimist")(process.argv.slice(2));
const Bundler = require("parcel-bundler");
const path = require("path");

/**
 * Get some functions that we use for WordPress development
 */
const wordpress = require("./functions");

const { OUTDIR, DEV_URL } = process.env;
const NODE_ENV = argv.env || "production";
const NEED_DEV_URL = NODE_ENV !== "production" && DEV_URL === undefined;

console.log("=======");
console.log(NODE_ENV);
console.log("=======");

/**
 * If the DEV_URL is not set, stop here
 */
if (NEED_DEV_URL) wordpress.needsDevUrl();

/**
 * Our main function that bundles our javascript and css, as well as moves our
 * files into the proper location based off the OUTDIR in our .env
 *
 * @param {glob} files - A glob of files for parcel to use as entry points
 */
const runBundle = async (files) => {
  const options = {
    outDir:
      NODE_ENV !== "production"
        ? OUTDIR
        : path.join(__dirname, "../allthestuff"),
    hmr: false,
  };
  const bundler = new Bundler(files, options);

  await bundler.bundle();
  await wordpress.build(bundler.options.outDir);

  if (NODE_ENV !== "production") {
    console.clear();
    wordpress.browserInit();
    wordpress.runWatcher(bundler);
    bundler.on("bundled", async () => wordpress.browserReload());
  }
};

runBundle(argv.f);
