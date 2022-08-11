---
id: type-selectors
title: Type Selector
---

A CSS `type selector` is used to target DOM elements according to their tag name.

This page goes over how Stylable handles `type selector`, for more details about the language feature itself, checkout [MDN type selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors).

## Syntax

### Native element

A native element behaves exactly as it does in CSS, and requires no special treatment in Stylable.

<!-- prettier-ignore-start -->
```css
/* scoped under local class */
.root div {} 

/* scoped to local class */
div.root  {} 
```
<!-- prettier-ignore-end -->

### Component element

Use a **capital first letter** to refer to a [default import](./imports.md#default-import) of a stylesheet [root](./root.md).

<!-- prettier-ignore-start -->
```css
@st-import Comp from './comp.st.css';

/* style all Comp nested under root */
.root Comp {}
```
<!-- prettier-ignore-end -->

## Scoping

Stylable validates that a type selector is scoped to the stylesheet it is in. To target a type selector, compound it or scope it under a local class in order to avoid styling unrelated elements outside the scope of the stylesheet.

<!-- prettier-ignore-start -->
```css
/* error - unscoped selector */
div {}

/* valid */
.root div {}
div.root {}
```

:::tip reuse scope
Scope rules with the [`@st-scope`](./st-scope.md) at-rule to minimize selector verbosity.
```css
@st-scope .root {
  div {}
}
```
:::
<!-- prettier-ignore-end -->

## Import and Export

Component elements, with **capital first letter**, can be exported from a stylesheet **if used** in a selector. You can import them within the `@st-import` [named import](./imports.md#named-import) brackets.

<!-- prettier-ignore-start -->
```css title="index.st.css"
@st-import Button from './button.st.css';
@st-import Menu from './menu.st.css';

.root Button {}
.root Menu {}
```

```css title="theme.st.css"
@st-import [Button, Menu] from './index.st.css';

@st-scope .root {
  /* customize all buttons nested in theme root */
  Button {}
  /* customize all menus nested in theme root */
  Menu {}
}
```
<!-- prettier-ignore-end -->

## Runtime

Elements are not available on the Stylable stylesheet runtime.

## Namespace

Native elements are not namespaced. However, if an element originates from a class, like a component element default import, then it is transformed during build.

<!-- prettier-ignore-start -->
```css title="entry.st.css"
@st-import Button from './button.st.css';

.root Button {}
.root div {}

/* OUTPUT */
.entry__root .button__root {}
.entry__root div {}
```
<!-- prettier-ignore-end -->
