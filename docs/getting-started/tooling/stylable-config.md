---
id: stylable-config
title: stylable.config.js
---

The `stylable.config.js` file acts as a central place where you can write your top level configuration for the entire project, so that they are re-used across builds and integrations, and reduce code duplications.

The configuration file should be located in the project root directory in order to be picked up automatically.

## Project stc config

- to learn about the cli api, see [CLI doc] (./cli)
- `stcConfig` field and `typedConfiguration` utility function
  - example single project
- Multi project / mono-repo / multi-build
  - example multi project
- flag to activate stcConfig in integrations (webpack, rollup)

todo: options diff in stcConfig to cli options

## webpack plugin config

- to learn about webpack integration, see [Webpack integration] (../webpack-integration)
- `StylableWebpackPlugin` will attempt to load the nearest `stylable.config.js` file and use it as override
