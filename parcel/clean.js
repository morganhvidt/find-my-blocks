require("dotenv").config();
const rimraf = require("rimraf");
const chalk = require("chalk");

const { OUTDIR } = process.env; // eslint-disable-line no-undef
const outputDirectory = OUTDIR !== undefined ? OUTDIR : "./dist";

const clean = dest => {
  rimraf(dest, () => {
    const dir = dest.split("/");

    console.log(
      chalk.bgRed.black(`Removed old directory - ${dir[ dir.length - 1 ]}`),
    );
  });
};

clean(outputDirectory);
