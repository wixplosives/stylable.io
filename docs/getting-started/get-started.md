---
id: intro
title: Intro
---

## What is Stylable?

**Stylable** is a CSS preprocessor that enables you to write reusable, highly-performant, styled components. Each component exposes a style API that maps its internal parts so you can reuse components across teams without sacrificing stylability.

- Namespace styles to components so they don't "leak" and clash with other styles.
- Enable custom pseudo-classes and pseudo-elements that abstract the internal structure of a component. These can then be styled externally.

At build time, the preprocessor converts the **Stylable** CSS into flat, static, valid, vanilla CSS that works cross-browser.

**Stylable** is agnostic to the component framework being used, it provides a way to write CSS that can be applied to any framework. All examples on the site use React-like syntax for demo purposes. However, the CSS written with **Stylable** can easily be used with any other frameworks such as Vue, Angular, or SolidJS.

## Where do I start?

There are currently two ways of starting working with **Stylable**:

- Quickly start a new project from a [boilerplate](./boilerplate.mdx)
- Integrate into a new or existing project by [manually configuring](./manual-integration.mdx) **Stylable**.

Optionally, you can install [**Stylable Intelligence**](./tooling/stylable-intelligence.md), an extension providing IDE support for code completion and diagnostics (currently supported only for Visual Studio Code).

## Want to learn more?

- **Read the handbook** - Take a tour through the features of Stylable, and see how to use them in the [handbook guides](../guides/handbook/intro.md).

- **Explore the API docs** - Take a look at our [specification reference documents](../references/cheatsheet.mdx) to get more acquainted with our code and to see specific code examples. Use the overview as a cheat sheet to help you keep track of **Stylable** syntax.

- **Play with Stylable Online** - Take Stylable for a spin and see how it works in the [Stylable Playground](/playground).
