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

:::note soft definition
A container name symbol is defined using the `container/container-name` declaration only when not explicitly defined by an import or a [global `@container` definition](#disable-namespace).
:::

**Usage**

<!-- prettier-ignore-start -->
```css
@container panel (width <= 250px) {
  /* style nested rules */
}
```
<!-- prettier-ignore-end -->

## Import and Export

An exported container can be imported into another stylesheet with the [@st-import](./imports.md) at-rule.

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

In some cases the default namespace behavior is unwanted. In such cases, `st-global` can be used to set a container name as global:

<!-- prettier-ignore-start -->
```css
.x {
  container: st-global(panel);
}

@container st-global(panel) (width > 100px) {}

/* OUTPUT */
.x {
  container: panel;
}

@container panel (width > 100px) {}
```
<!-- prettier-ignore-end -->

::note global without symbol deinition
Setting `st-global` around the container name in either the declaration or container query only references a global container name, without creating a symbol that can later be imported or referenced.
::

To register a global container name symbol, that can be imported and referenced by other stylesheets, use the `@container` at-rule with no body or query:

<!-- prettier-ignore-start -->
```css
/* global panel container name definition */
@container st-global(panel);

.x {
  container: panel;
}
@container panel (width > 100px) {}


/* OUTPUT */

.x {
  container: panel;
}
@container panel (width > 100px) {}
```
<!-- prettier-ignore-end -->
