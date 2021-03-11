---
id: storybook-integration
title: Storybook Integration
---

In order for Stylable to work in storybook configure storybook to work with webpack and add the following snippet to your main storybook config.

This snippet basically doing two things and for complex webpack configurations just follow these two steps:

1. Exclude stylable files from all other css loaders
2. Add StylableWebpackPlugin

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
 This snippet should work for the default storybook config and it has assumptions about the structure of the configuration so it might break in future releases.  
:::
