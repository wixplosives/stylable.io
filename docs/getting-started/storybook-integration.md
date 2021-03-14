---
id: storybook-integration
title: Storybook Integration
---

To integrate Stylable with Storybook, configure your Storybook webpack configuration and add the following snippet.

This snippet basically does two things:

1. Excludes Stylable files (`*.st.css`) from all other existing CSS loaders
2. Adds `StylableWebpackPlugin` to the webpack configuration

```js
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

module.exports = {
    stories: ...,
    addons: ...,
    webpackFinal: (config) => {
        /* find all css loaders and add exclude .st.css files from them */
        for (const rule of config.module.rules) {
            if (rule.test && rule.test.toString() === `/\\.css$/`) {
                rule.exclude = /\.st\.css$/;
            }
        }

        /* inject StylableWebpackPlugin */
        config.plugins.push(new StylableWebpackPlugin());
        return config;
    }
}
```

:::important 

This snippet should work for the default Storybook configuration while having assumptions about the structure of the webpack configuration file, and so this might break in future releases.

:::
