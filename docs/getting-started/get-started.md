---
id: intro
title: Intro
---

## What is Stylable

**Stylable** is a CSS preprocessor that enables you to write reusable, highly-performant, styled components. Each component exposes a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability.

- Namespace styles to components so they don't "leak" and clash with other styles.
- Enable custom pseudo-classes and pseudo-elements that abstract the internal structure of a component. These can then be styled externally.

At build time, the preprocessor converts the **Stylable** CSS into flat, static, valid, vanilla CSS that works cross-browser.

## How do I install

There are currently two options for installing and working with **Stylable**:

- To begin writing your own project, you can [create a **Stylable** app](./install-configure.md) from our boilerplate.

- To work with an existing project, install one of our [available integrations](./integrations)

While **Stylable** can work with any component framework, we offer ready-made [React and TypeScript templates](./install-configure.md). If you're a Vue.js fan, here's an example of [Vue and Stylable](https://github.com/wix-playground/stylable-vue-example) working together.

Optionally, you can install [**Stylable Intelligence**](./stylable-intelligence.md), an extension providing IDE support for code completion and diagnostics. Currently supported for only Visual Studio Code.

## What's next

- **Learn with the handbook** - Take a tour through stylable features and how to use them in the [handbook guides](../guides/handbook/intro.md)

- **Read the API docs** - Take a look at our [specification reference documents](../references/cheatsheet.mdx) to get more acquainted with our code and for specific code examples. Use the overview as a cheatsheet to help you keep track of **Stylable** syntax.

- **Play with Stylable Online** - Take Stylable for a spin and see how it works in the [Stylable Playground](../playground/index.html)
