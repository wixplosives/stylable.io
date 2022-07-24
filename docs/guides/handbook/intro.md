---
id: intro
title: Introduction
---

## What is this handbook?

This document is meant to serve as a tour of Stylable features and how to use them. It explores the language one bite-sized chapter at a time, focusing on the core features. It is not meant to be a complete reference, but rather a starting point for learning how to use Stylable.

<!-- TODO: when adding chapters about tooling, add mention here -->

Each chapter focuses on a single aspect of Stylable, introducing a problem or need, showing how CSS might address them, and how Stylable can simplify the solution.

## What is Stylable?

Stylable is a **superset of the CSS language**, that is designed for working with components, variants, themes and various modern design patterns.

There are different aspects to Stylable, and the tooling and capabilities that it provides:

### Pre-processor

Stylable enables build time pre-processing of Stylable stylesheets, which result in **valid vanilla CSS output**. As part of being a pre-processor, it adds:

- Namespaces for any parts of CSS that can conflict so many stylesheets can be loaded together with safety
- A module system to CSS, so that individual symbols can be used across stylesheets
- Template capabilities for creating complex design patterns using variables, mixins, and formatters

### Type system

We love working with TypeScript, and the developer experience that it provides in terms of validations and rich language features.

We aspire for **Stylable to be for CSS, what TypeScript is for JavaScript**, and so Stylable is in itself a type system, providing interface support for selectors and reporting syntactic and semantic diagnostics.

### Language server

When working in a modern IDE, a language server makes a huge difference in the development experience. For Stylable we have created the [Stylable Intelligence](../../getting-started/stylable-intelligence.md) VS Code extension, which provides a better development experience through completions, definitions, hinting and more.

### Tooling

Stylable also handles cases that are beyond a pre-processor, it includes a set of tools and integrations to help you develop, build, and ship your CSS:

- CLI - control Stylable from your command line, build, manage, and validate your stylesheets
- Optimizations - Stylable has a deep awareness of how your stylesheets are used, and can optimize them to shorten names, or remove dead code
- Bundling - choose one of our supported bundler integrations to bundle your stylesheets for production

## Who is Stylable for?

Stylable is a lot like TypeScript, in that the more complex the project and the more people that work with it, the greater the value it has.

Having said that, even a single developer, working on a simple, standalone project could gain a lot of value from Stylable.

### Component library

Library authors can use Stylable to create reusable components, variants, and themes to organize their internal styling while controlling what styles they choose to expose as public interfaces.

### Application

Application creators can use Stylable to compose their own components alongside 3rd party libraries and to theme the final application to their UX and product requirements.

---

Sounds interesting? Ready to start?  
Head on over to the [first chapter](./class.mdx) where we talk about classes, and what they mean in Stylable.
