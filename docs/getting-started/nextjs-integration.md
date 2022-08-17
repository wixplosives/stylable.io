---
id: nextjs-integration
title: NextJS
---

There are few steps you need to follow to integrate Stylable in to your NextJS project.

1. install `@stylable/webpack-plugin` as a `devDependency` in your `package.json`
2. Create a `next.config.js` file
3. Exclude other CSS loaders from loading Stylable (\*.st.css) files
4. Add the Stylable plugin to the webpack configuration

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

If your project consumes any 3rd-party Stylable stylesheets, additional configuration is required to ensure that they will be handled by `@stylable/webpack-plugin`.

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
    
    if (isServer) {
     // causes provided packages to be bundled (not external)
     bundleLibs(config, new Set(['PACKAGE1', 'PACKAGE2']));
    }

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

function bundleLibs(config, packages) {
  if (!Array.isArray(config.externals) && 
      config.externals.length === 1 && 
      typeof config.externals[0] === 'function') {
    throw new Error(
      'Invalid configuration: expected config.externals to be an Array with a single function. got ' +
        JSON.stringify(config.externals)
    );
  }
  const nextExternals = config.externals[0];
  config.externals = [
    async (ctx) => {
      for (const pack of packages) {
        if (ctx.request.startsWith(pack)) {
          return false;
        }
      }
      return nextExternals(ctx);
    },
  ];
}
```

<!-- prettier-ignore-end -->

### TypeScript integration

If your NextJS project is configured to work with TypeScript, see our page on [integrating Stylable with TypeScript](/docs/getting-started/typescript-integration).
