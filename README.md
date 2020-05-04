# Find My Blocks

Find My Blocks is a WordPress plugin built to help (as it says in the name)
find where you have used specific Gutenberg blocks on your WordPress website.

## Installation

To install this plugin, Please use the [WordPress Plugin Page](https://wordpress.org/plugins/find-my-blocks).

## Development

To start developing on Find My Blocks:

```sh
git clone git@github.com:eddysims/find-my-blocks.git
cd find-my-blocks
npm ci
```

To run the docz server:

```sh
npm start
```

To run the WordPress server:

**Rename the `.env.sample` file to `.env`**

```sh
mv .env.sample .env
```

**Add the following 2 variables to your `.env` file**

`OUTDIR` = The path to your `find-my-blocks` plugin.

`DEV_URL` = The url you server your local WordPress site on.

**Start the server**

```sh
npm run start:wp
```

## Generate a component

Running the following command will generate a boilerplate component for you to work with

```sh
npm run plop
```

## Linting & Testing

To run the linter use

```sh
npm run lint
```

To run tests use

```sh
npm run test
```

## Mock Data

The mock data was generated using https://next.json-generator.com/NyFbl7dFd
