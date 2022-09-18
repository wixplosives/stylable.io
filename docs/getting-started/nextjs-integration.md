---
id: nextjs-integration
title: NextJS
---

There are a few steps you need to follow to integrate Stylable into your NextJS project.

1. Install `@stylable/webpack-plugin` as a `devDependency` in your `package.json` file.
2. Create a `next.config.js` file.
3. Exclude other CSS loaders from loading Stylable (\*.st.css) files.
4. Add the Stylable plugin to the webpack configuration.

#### Example Configuration:

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

### Using 3rd-party stylesheets

If your project consumes any 3rd-party Stylable stylesheets, additional configuration is required to ensure that they will be handled by `@stylable/webpack-plugin`:

1. Add an import to `bundleServerLibs` from `@stylable/webpack-plugin`
2. Use the `isServer` flag from the webpack configuration context in the second argument 
3. Call `bundleServerLibs` with the webpack `config`, packages to bundle, and the `isServer` flag

#### Example Configuration:

<!-- prettier-ignore-start -->

```js title="next.config.js"
const { 
  StylableWebpackPlugin,
  applyWebpackConfigStylableExcludes,
  bundleServerLibs
} = require('@stylable/webpack-plugin');

/* 
 * single optimizer for NextJS multiple builds 
 * in order to sync client/server namespaces 
*/
const StylableOptimizer = require('@stylable/optimizer').StylableOptimizer;
const stylableOptimizer = new StylableOptimizer();

module.exports = {
  webpack: (config, { isServer }) => {
    /* exclude Stylable files from all other loaders */
    applyWebpackConfigStylableExcludes(config);
    
    // causes provided packages to be bundled (not external)
    bundleServerLibs(config, new Set(['PACKAGE1', 'PACKAGE2'], isServer));

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

### TypeScript integration

If your NextJS project is configured to work with TypeScript, see our page on [integrating Stylable with TypeScript](/docs/getting-started/typescript-integration).
