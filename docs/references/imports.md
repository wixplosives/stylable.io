---
id: imports
title: Import
---

The Stylable `@st-import` at-rule is used to reference definitions from other `.st.css` or `.js` modules in a similar way to [JavaScript Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

<!-- ToDo: add difference from native @import -->

## Syntax

```css
@st-import Default, [namedA, namedB as localB] from 'request';
```

<!-- specifier? / request? -->

:::info re-declare symbol

- import local names must be unique.
- Imports are hoisted above local definitions.

:::

### Default import

In order to reference the the default export of a module, provide a local name after the `@st-import`.

<!-- prettier-ignore-start -->
```css
@st-import DefaultLocalName from 'request';
```
<!-- prettier-ignore-end -->

### Named import

To reference named exports of a module, in square brackets (after the optional default import), provide a comma separated list of requested names.

<!-- prettier-ignore-start -->
```css
/* named imports */
@st-import [partA, partB] from 'request';

/* default + named imports */
@st-import Default, [partA, partB] from 'request';
```
<!-- prettier-ignore-end -->

#### Local alias

Use the `as` keyword to map an export name to a local name.

<!-- prettier-ignore-start -->
```css
@st-import [part as localPartName] from 'request';
```
<!-- prettier-ignore-end -->

## Stylable stylesheet

When importing from a stylesheet, the [root](./root.md#default-export) class is mapped to the default export, and several named symbols can be referenced by name:

<!-- prettier-ignore-start -->
```css title="origin.st.css"
/* define symbols */
.part {
  --customProp: yellow;
}
@keyframes anim {}
@layer comps, theme;
:vars {
  stVar: green;
}
```

```css title="entry.st.css"
@st-import OriginRoot, [
  part,         /* part class name */
  --customProp, /* custom property */
  stVar         /* build var */
] from './origin.st.css';
```
<!-- prettier-ignore-end -->

:::caution Stylesheet default capitalization
When importing a **default** value from a stylable stylesheet, you should use a capital letter to signify that the value represents a component root.
:::

### Named type assertion

To import keyframes or layers from another stylesheet, a special [keyframes()](./keyframes.md#import-and-export) or [layer()](./layer#import-and-export) assertion is required.

<!-- prettier-ignore-start -->
```css title="entry.st.css"
/* import keyframe and layer */
@st-import [
  keyframes(anim),
  layer(theme)
] from './origin.st.css';

/* multiple */
@st-import [
  keyframes(anim1, anim2), 
  layer(comps, theme)
] from './origin.st.css';
```
<!-- prettier-ignore-end -->

## Javascript

To import Javascript definitions for [values](./variables.md), [mixins](./mixins.md), and [formatters](./formatters.md), use the `@st-import` statement in the same way as you would for a stylesheet.

<!-- prettier-ignore-start -->

```css
@st-import DefaultExport, [namedA, namedB as localB] from './code.js';
```

<!-- prettier-ignore-end -->

## Legacy syntax

An older variation for `@st-import` is the `:import` (pseudo-import). While it still works, it is **highly discouraged** for usage, verbose and will be deprecated in the future.

<!-- prettier-ignore-start -->
```css
:import {
  -st-from: 'request';
  -st-default: DefaultLocalName;
  -st-named: namedA, namedB as localB;
}
```
<!-- prettier-ignore-end -->

A code-mod to migrate to the new syntax is available ([see doc](https://github.com/wix/stylable/tree/master/packages/cli#builtin-codemods))
