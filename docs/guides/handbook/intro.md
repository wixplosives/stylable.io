---
id: intro
title: Introduction
---

## What is this handbook?

This document is meant to serve as a tour of Stylable features and how to use them. Each chapter focuses on one of the core features. This is not a complete reference, but rather a starting point for learning how to use Stylable.

<!-- TODO: when adding chapters about tooling, add mention here -->

Each chapter focuses on a single aspect of Stylable, introducing a problem or need, showing how CSS might address it, and how Stylable can simplify the solution.

## What is Stylable?

Stylable is a **superset of the CSS language** - it introduces additional syntax to CSS, that allow us to add features to CSS in pre-processing time. It is designed for working with components, variants, themes and various modern design patterns.

There are different aspects to Stylable, and the tooling and capabilities that it provides:

### Pre-processor

The Stylable pre-processor works at build-time, meaning we can use all of its features while writing the code. Its input is a Stylable stylesheet and its output is **valid vanilla CSS**. The pre-processing it performs adds the following to CSS:

- Namespaces any parts of CSS that can conflict, so that multiple stylesheets can be loaded together safely
- A module system to CSS, so that individual symbols can be used across stylesheets
- Templating capabilities for creating complex design patterns using variables, mixins, and formatters

### Type system

We love working with TypeScript, and the developer experience that it provides in terms of validations and rich language features.

We aspire for **Stylable to be for CSS, what TypeScript is for JavaScript**, and so Stylable is in itself a type system, providing interface support for selectors and reporting syntactic and semantic diagnostics.

### Language server

When working in a modern IDE, a language server makes a huge difference in the development experience. For Stylable we have created the [Stylable Intelligence](../../getting-started/stylable-intelligence.md) VS Code extension, which provides a better development experience through completions, definitions, hinting and more.

### Tooling

Pre-processing and language features are not all that Stylable does. It also includes a set of tools and integrations that help develop, build and ship better CSS:

- Stylable CLI - a command line interface to help build, manage and validate stylesheets for production and CI/CD workflows
- Optimization tools - Stylable has a deep awareness of how your stylesheets are used, and can optimize them to shorten names, or remove dead code
- Bundling - choose one of our supported bundler integrations to bundle your stylesheets for production

## Who is Stylable for?

We modeled Stylable after TypeScript, and like TypeScript, the more complex the project and the more people it involves, the greater the value it provides.

Having said that, even a single developer, working on a simple, standalone project could gain a lot of value from Stylable.

### Component libraries

Library authors can use Stylable to create reusable components, variants, and themes. It helps organize component and theme styling while controlling what elements and styles are exposed as public interfaces.

### Applications

Application creators can use Stylable to compose their own components alongside 3rd party libraries and to theme the final application to their UX and product requirements.

---

Sounds interesting? Ready to start?  
Head on over to the [first chapter](./class.mdx) where we talk about classes, and what they mean in Stylable.
