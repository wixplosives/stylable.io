---
id: webpack-integration
title: Webpack
---

The Stylable Webpack integration provides development, build, and bundle capabilities.

## Install

Install the **@stylable/webpack-plugin** as a dev dependency in your local project.

Using npm:

```bash
npm install @stylable/webpack-plugin --save-dev
```

Using Yarn:

```bash
yarn add @stylable/webpack-plugin --dev
```

## Configuration

In `webpack.config`, add the `StylableWebpackPlugin` to set up Stylable:

```js
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

// webpack config
{
  plugins: [new StylableWebpackPlugin()],
}
```

For more information on configuring the `@stylable/webpack-plugin`, see the [readme file](https://github.com/wix/stylable/tree/master/packages/webpack-plugin).

### With another CSS solution

When coming into a project with an existing Webpack CSS integration, you will need to exclude `.st.css` files from any other integration.

For example, to exclude Stylable from `css-loader`:

```js {11}
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

{
  plugins: [
    new StylableWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.st\.css?/,
        use: ["css-loader"],
      },
    ],
  },
}
```

### `stylable.config.js`

Adding the `webpackPlugin` export field to the [`stylable.config.js`](./stylable-config) will set as the default configuration for any Stylable Webpack plugins in the project.

```js
module.exports.webpackPlugin = function (config) {
  return {
    ...config,
    optimize: {
      shortNamespaces: true,
      minify: true,
    },
  };
};
```
