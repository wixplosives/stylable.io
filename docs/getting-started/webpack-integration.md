---
id: webpack-integration
title: Webpack
---

The Stylable Webpack integration provides development, build, and bundle capabilities.

## Install

Install the **@stylable/webpack-plugin** as a dependency in your local project.

Using npm:

```bash
npm install @stylable/webpack-plugin --save-dev
```

Using Yarn:

```bash
yarn add @stylable/webpack-plugin --dev
```

## Configuration

In the `webpack.config` add the `StylableWebpackPlugin` to setup stylable:

```js
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

// webpack config
{
  plugins: [new StylableWebpackPlugin()],
}
```

For more information on configuring the `@stylable/webpack-plugin`, see the [readme file](https://github.com/wix/stylable/tree/master/packages/webpack-plugin).

### With another CSS solution

Coming into an existing project with other Webpack CSS integration
solutions, you need to exclude `.st.css` files from that other integration.

For example, exclude stylable from `css-loader`:

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
        exclude: /\.st\.css?/, /* exclude stylable files */
        use: ["css-loader"],
      },
    ],
  },
}
```
