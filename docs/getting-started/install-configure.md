---
id: getting-started/install-configure
title: Installation
redirect_from: "docs/index.html"
layout: docs
---

There are currently two options for installing and working with **Stylable** as described in the following sections.

## Write your own project based on a Stylable boilerplate

To begin writing your own project, you can create a **Stylable** app from our boilerplate. It is based on [create-react-app](https://github.com/facebookincubator/create-react-app). To create the project, follow these instructions: 

Using npm:
```bash
npm install -g create-react-app

create-react-app my-app-name --scripts-version stylable-scripts
```
For the `my-app-name` value above, replace with the name of your project. Once you run the command, a directory with that same name is created. Go to that directory and run `yarn start` or `yarn build` to create the project in a browser.

The project includes several basic components and **Stylable** stylesheets which have the suffix `.st.css`. 

## Install Stylable to work with an existing project

To work with an existing project, you can install [Stylable](https://github.com/wix/stylable) and the [stylable-webpack-plugin](https://github.com/wix/stylable-webpack-plugin) packages from our GitHub repositories. 

Install **Stylable** and the **stylable-webpack-plugin** as a dependency in your local project.

Using npm:
```bash
npm install stylable stylable-webpack-plugin --save-dev
```
Using Yarn:
```bash
yarn add stylable stylable-webpack-plugin --dev
```

## Write in Stylable

Once you've installed either the boilerplate or the packages into your own project, you can begin writing in **Stylable**. Look through the [Specifications Reference](./cheatsheet.md) for specs and code examples. 

To take advantage of code completion and diagnostics, install [**Stylable Intelligence**](./stylable-intelligence.md) currently supported for only Visual Studio Code (version 1.16 and later).

## Build configuration

Currently we support Webpack as our build system. To author a component library, use our CLI tool to build each CSS separately.

Add **Stylable** to your Webpack configuration as follows: 

```js
const StylableWebpackPlugin = require('stylable-webpack-plugin');
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

For more information on configuring the stylable-webpack-plugin, see the   [readme file](https://github.com/wix/stylable-webpack-plugin).

## Types

Typescript needs to be made aware of Stylable in order to provide typing and module resolution. To do this, simply copy the `globals.d.ts` file found [here](https://github.com/wix/stylable/blob/master/packages/stylable-scripts/template/src/globals.d.ts) to the `src` folder of your Typescript + Stylable project.
