---
id: rollup-integration
title: Rollup
---

The Stylable Rollup integration provides development, build, and bundle capabilities.

## Install

Install the **@stylable/rollup-plugin** as a dev dependency in your local project.

Using npm:

```bash
npm install @stylable/rollup-plugin --save-dev
```

Using Yarn:

```bash
yarn add @stylable/rollup-plugin --dev
```

## Configuration

```js title="rollup.config.js"
const { stylableRollupPlugin } = require('@stylable/rollup-plugin');

module.exports = {
  plugins: [stylableRollupPlugin()],
};
```

For more information on configuring the `@stylable/rollup-plugin`, see the [readme file](https://github.com/wix/stylable/tree/master/packages/rollup-plugin).
