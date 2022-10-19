---
id: contains
title: Containers
---

CSS container queries are used to target and style an element depending on the conditions of a container it is nested within.

This page goes over how Stylable handles the `container-name` declaration and the `@container` at-rule, for more details about the language feature itself, check out the following resources:

- [MDN CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [CSS contains spec](https://drafts.csswg.org/css-contain-3)

## Syntax

**Container definition**

```css
.panel {
  /* longhand */
  container-name: panel;

  /* shorthand */
  container-name: panel / inline-size;

  /* longhand with multiple names */
  container-name: panel side;
}
```

**Usage**

<!-- prettier-ignore-start -->
```css
@container panel (width <= 250px) {
  /* style nested rules */
}
```
<!-- prettier-ignore-end -->

## Import and Export

An exported container can be imported into another stylesheet with the [@st-import](./imports.md) atrule.

**Style nested container rules**

<!-- prettier-ignore-start -->
```css
/* get 'panel' container definition from another stylesheet */
@st-import [container(panel)] from './x.st.css';

@container panel (width <= 150px) {
    /* nested container rules */
}
```
<!-- prettier-ignore-end -->

**More import examples**

```css
/* map 'panel' container to local name 'x-panel' */
@st-import [container(panel as x-panel)] from './x.st.css';

/* import multiple containers */
@st-import [container(panel, header)] from './x.st.css';
```

## Runtime

A Container definition can be accessed to generate dynamic styles using the containers mapping on the Stylable runtime stylesheet:

```js
import { containers } from './sheet.st.css';

// map to target namespaced container
containers.panel;
```

## Namespace

Stylable automatically namespaces any container name according to the stylesheet it is defined in:

<!-- prettier-ignore-start -->
```css
.x {
  container: panel;
}

@container panel (width > 100px) {}

/* OUTPUT */
.x {
  container: NAMESPACE__panel;
}

@container NAMESPACE__panel (width > 100px) {}
```
<!-- prettier-ignore-end -->

### Disable namespace

In some cases the default namespace behavior is unwanted. In such cases, `st-global` can be used to mark a container definition as global:

<!-- prettier-ignore-start -->
```css
.x {
  container: st-global(panel);
}

@container panel (width > 100px) {}

/* OUTPUT */
.x {
  container: panel;
}

@container panel (width > 100px) {}
```
<!-- prettier-ignore-end -->

In case a container is not defined within a stylable stylesheet and is just used in a container query, the `st-global` function can be used directly in the `@container` at-rule.

<!-- prettier-ignore-start -->
```css
@container st-global(panel) (width > 100px) {}

/* OUTPUT */

@container panel (width > 100px) {}
```
<!-- prettier-ignore-end -->

:::info Referencing a global container name
When `st-global` is used in the `@container` at-rule it doesn't register a symbol and is not available for import in another Stylesheet or in the JavaScript runtime.
:::
