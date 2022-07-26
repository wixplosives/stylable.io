---
id: install-configure
title: Installation
---

There are currently two options for installing and working with **Stylable** as described in the following sections.

## Starting from a boilerplate

To begin writing your own project, you can create a **Stylable** app from our boilerplate. The project can be created by the following commands:

Using `npm`:

```bash
npm init stylable-app <project-name>
```

Using `yarn`:

```bash
yarn create stylable-app <project-name>
```

For the `<project-name>` placeholder above, replace with the name of your project, Once you run the command, a directory with that same name is created. Go to that directory and run `npm start` to view the project in a browser, or`npm run build` to build your project's target code.

The project includes several basic components and **Stylable** stylesheets with the suffix `.st.css`.

### Alternative template

The default template when starting `stylable-app` is `ts-react-webpack`, which combines Typescript, React, and Webpack. A different template which uses Rollup instead of Webpack can be installed with:

Using `npm`:

```bash
npm init stylable-app <project-name> --template ts-react-rollup
```

Using `yarn`:

```bash
yarn create stylable-app <project-name> --template ts-react-rollup
```

## Working with an existing project

There are several different integrations for stylable to pick from:

- [Webpack integration](./webpack-integration.md)
- [Rollup integration](./rollup-integration.md)
- [Next.js integration](./nextjs-integration.md)

## Language server

To take advantage of code completion and diagnostics, install [**Stylable Intelligence**](./stylable-intelligence.md) (currently only supported for Visual Studio Code).

## TypeScript support

To configure Stylable to work with TypeScript, check out our [TypeScript Integration](./typescript-integration.md) guide.

## Write in Stylable

Once you've installed either the boilerplate or the manually configured Stylable, you can begin writing in **Stylable**. Look through the [Handbook](../guides/handbook/intro.md) and [Specifications Reference](../references/cheatsheet.md) to help guide you in your work.
