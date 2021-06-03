---
id: install-configure
title: Installation
---

There are currently two options for installing and working with **Stylable** as described in the following sections.

## Create a new Stylable project from a boilerplate

To begin writing your own project, you can create a **Stylable** app from our boilerplate. The project can be created by any of the following commands:

Using `npx`:

```bash
npx create-stylable-app <project-name>
```

Using `npm`:

```bash
npm init stylable-app <project-name>
```

Using `yarn`:

```bash
yarn create stylable-app <project-name>
```

For the `<project-name>` placeholder above, replace with the name of your project. Once you run the command, a directory with that same name is created. Go to that directory and run `npm start` to view the project in a browser, or `npm run build` to build your project's target code.

The project includes several basic components and **Stylable** stylesheets which have the suffix `.st.css`.

## Install Stylable to work with an existing project

To work with an existing `webpack` based project, you can install [Stylable](https://github.com/wix/stylable) and the [@stylable/webpack-plugin](https://github.com/wix/stylable/tree/master/packages/webpack-plugin) packages from our GitHub repositories.

Install **Stylable** and the **@stylable/webpack-plugin** as a dependency in your local project.

Using npm:

```bash
npm install @stylable/core @stylable/webpack-plugin --save-dev
```

Using Yarn:

```bash
yarn add @stylable/core @stylable/webpack-plugin --dev
```

## Write in Stylable

Once you've installed either the boilerplate or the packages into your own project, you can begin writing in **Stylable**. Look through the [Specifications Reference](../references/cheatsheet.md) for specs and code examples.

To take advantage of code completion and diagnostics, install [**Stylable Intelligence**](./stylable-intelligence.md) currently supported for only Visual Studio Code.

## Build configuration

Currently we support Webpack as our build system. To author a component library, use our CLI tool to build each CSS separately.

Add **Stylable** to your Webpack configuration as follows:

```js
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
...
{
    module: {
        rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: [
            {
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            }
            ]
        }
        ]
    }
    plugins: [
        new StylableWebpackPlugin()
    ]
}
```

For more information on configuring the @stylable/webpack-plugin, see the [readme file](https://github.com/wix/stylable/tree/master/packages/webpack-plugin).

## Types

TypeScript requires to be made aware of Stylable in order to provide typings and module resolution for `*.st.css` files. To do this, create a `globals.d.ts` file in your `./src` directory and add the following declaration.

```ts
// globals.d.ts
declare module "*.st.css" {
  export * from "@stylable/runtime/stylesheet";

  const defaultExport: unknown;
  export default defaultExport;
}
```
