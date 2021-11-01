---
id: cheatsheet
title: Specification Overview
---

## CSS Terminology

- **Simple selector**: Type selector, class selector (+Stylable [root class](../references/root.md))
- **CSS property**: Name of the rule (e.g. color)
- **CSS declaration**: CSS property paired with a value
- **CSS declaration Block**: List of CSS declarations
- **CSS ruleset**: CSS declaration block paired with a selector

[MDN docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax#CSS_Declarations)

## Stylable

Syntax unique to Stylable - Click each to access code examples and descriptions

- **Directive rules** `-st-*` Instructions for the **Stylable** pre-processor, removed during transpilation
  - [**`-st-extends`**](../references/extend-stylesheet.md) - Extend an existing class or element
  - [**`-st-states`**](../references/pseudo-classes.md) - Define custom pseudo-classes
  - [**`-st-mixin`**](../references/mixins.md) - Apply mixins to CSS ruleset
- **Selectors**
  - [**`.xX`**](../references/class-selectors.md) - Class selectors
  - [**`X`**](../references/tag-selectors.md) - Tag/component selectors
  - [**`::X`**](../references/pseudo-elements.md) - Target internal part (pseudo-element)
  - [**`:X`**](../references/pseudo-classes.md) - Target states including native and custom (pseudo-classes)
  - [**`:--X`**](../references/custom-selectors.md) - Selector alias (custom selector)
  - [**`:global(X)`**](../references/global-selectors.md) - Keep selector global
- **Import directives** - Import external assets like mixins, stylesheets, common CSS and vars
  - [**`@st-import Comp, [x, --x] from "./x.st.css"`**](../references/imports.md)
  - [**`:import {}`**](../references/imports.md) - (old syntax, not recommended)
    - [**`-st-from`**](../references/imports.md#import-syntax) - Location of file to import
    - [**`-st-default`**](../references/imports.md#import-the-default-export-of-a-local-reference-stylesheet-for-use-in-the-scoped-stylesheet) - Import the file's default export value
    - [**`-st-named`**](../references/imports.md#import-named-parts-from-a-local-stylesheet) - Import the file's named export value or values
  - [**`keyframes(x1, x2, x3)`**](../references/keyframes.md#imports-and-exports) - Import named keyframe definitions from a different stylesheet
- [**`:vars {}`**](../references/variables.md) - Define common values to be used across the stylesheet or project
- **Utility directives**
  - [**`@st-scope .x {}`**](../references/st-scope.md) - Scope nested rules with a given selector
  - [**`@namespace "readable name";`**](../references/namespace.md) - Development display name for debugging
- [**formatters**](../references/formatters.md) - Custom JavaScript functions for generating declaration values
