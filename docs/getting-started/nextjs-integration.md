---
id: nextjs-integration
title: NextJS Integration
---

There are few steps in order for Stylable to work in NextJS:

1. Create a `next.config.js`
2. Use NextJS webpack 5 future
3. Exclude other css loading from the webpack configuration.
4. Add the Stylable plugin to the webpack configuration.

```js
const {
    StylableWebpackPlugin,
    applyWebpackConfigStylableExcludes,
} = require('@stylable/webpack-plugin');

module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        /* Exclude Stylable from all other loaders */
        applyWebpackConfigStylableExcludes(config);
        /* Add Stylable plugin to the webpack configuration */
        config.plugins.push(
            new StylableWebpackPlugin({
                filename: 'static/css/stylable.[contenthash].css',
            })
        );
        return config;
    },
};
```
