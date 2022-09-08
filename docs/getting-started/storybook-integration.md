---
id: storybook-integration
title: Storybook
---

To integrate Stylable with Storybook, you need to do two things:

1. Exclude Stylable files (`*.st.css`) from all other existing CSS loaders.
2. Add `StylableWebpackPlugin` to the webpack configuration.

Add the following snippit to your Storybook webpack configuration to get these two actions done:

```js
const {
    StylableWebpackPlugin,
    applyWebpackConfigStylableExcludes
} = require('@stylable/webpack-plugin');

module.exports = {
    stories: ...,
    addons: ...,
    webpackFinal: (config) => {
        /* find all css loaders and add exclude .st.css files from them */
        applyWebpackConfigStylableExcludes(config);

        /* inject StylableWebpackPlugin */
        config.plugins.push(new StylableWebpackPlugin());
        return config;
    }
}
```

:::caution

This snippet should work with default Storybook configuration. It assumes some things about the structure of the file which might not be true in future releases of Storybook.

:::
