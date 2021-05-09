---
id: nextjs-integration
title: NextJS Integration
---

There are few steps you need to follow in order to integrate Stylable to your NextJS project.

1. Create a `next.config.js`
2. Use NextJS webpack 5 future
3. Exclude other css loading from the webpack configuration
4. Add the Stylable plugin to the webpack configuration

### Example Configuration:

```js
const {
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
} = require("@stylable/webpack-plugin");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);

    /* add the Stylable plugin to the webpack configuration */
    config.plugins.push(
      new StylableWebpackPlugin({
        /* let NextJS handle assets */
        filterAssets: () => false,

        /* output CSS to the correct location */
        filename: "static/css/stylable.[contenthash].css",
      })
    );
    return config;
  },
};
```

:::important
The `applyWebpackConfigStylableExcludes` export is available in `@stylable/webpack-plugin` version `4.2.2` and onwards.
:::
