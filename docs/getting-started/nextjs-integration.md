---
id: nextjs-integration
title: NextJS
---

There are few steps you need to follow to integrate Stylable in to your NextJS project.

1. Create a `next.config.js` file
2. Exclude other CSS loaders from loading Stylable (\*.st.css) files
3. Add the Stylable plugin to the webpack configuration

### Example Configuration:

<!-- prettier-ignore-start -->

```js title="next.config.js"
const { 
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes 
} = require('@stylable/webpack-plugin');

/* 
 * single optimizer for NextJS multiple builds 
 * in order to sync client/server namespaces 
*/
const StylableOptimizer = require('@stylable/optimizer').StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  webpack: (config) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);

    /* add the Stylable plugin to the webpack configuration */
    config.plugins.push(
      new StylableWebpackPlugin({
        /* let NextJS handle assets */
        filterAssets: () => false,

        /* output CSS to the correct location */
        filename: 'static/css/stylable.[contenthash].css',

        /* a shared optimizer instance */
        optimizer: stylableOptimizer,
      })
    );
    return config;
  },
};
```

<!-- prettier-ignore-end -->

:::important
The `applyWebpackConfigStylableExcludes` export and `filterAssets` flag are available in `@stylable/webpack-plugin` version `4.2.2` and onwards.
:::
