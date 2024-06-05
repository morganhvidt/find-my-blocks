# Find My Blocks - Locate WordPress Blocks

Find My Blocks is a WordPress plugin built to help (as it says in the name) find
where you have used specific Gutenberg blocks on your WordPress website.

- [x] Search for core WordPress Blocks.
- [x] Search for third-party plugin Blocks.
- [x] Search for WordPress templates & template parts.
- [x] Search for custom templates.
- [x] Search for synced patterns (Reuseable blocks).
- [x] Ready for Full Site Editing themes & block-enabled themes.

## Download stable version

You can read more on the official website or WordPress repository.

- [findmyblocks.com](https://findmyblocks.com/)
- [wordpress.org/plugins/find-my-blocks](https://wordpress.org/plugins/find-my-blocks/)

## Contribute to development

To start developing on **Find My Blocks** you have to setup your local environment.

- The build process is automated by [Morgan's WordPress Plugin Builder](https://github.com/morganhvidt/wp-plugin-builder)
- Local WordPress site, could be [Local WP](https://localwp.com) or the [WordPress Playground](https://wordpress.org/playground/) in VSCode.
- Requires NodeJS, PHP & Composer to be installed on your computer first.

``` shell
npm install
```

``` shell
npm run dev
```
All files and scripts will be built into the `/production/find-my-blocks` folder. You should copy a symbolic link to your Local WP site. All changes will be reflected as you file changes.

``` shell
npm run production
```
A production ready zip file will be created within `/production/zip/`.

## Feature wishlist

- [ ] Standardize & refactor filters so third-parties can add their own checkboxes.
- [X] Remove useLocalStorage & usePreferences in favor of useIndexedDB.

## Who is behind this?

Morgan Hvidt is the current developer for Find My Blocks. You can follow him on Twitter / X [@morganhvidt](https://x.com/morganhvidt) or [morganhvidt.com](https://morganhvidt.com/)

A special thanks to [Edeesims](https://github.com/edeesims) who originally created the Find My Blocks plugin.
