---
id: layer
title: Layer
---

In CSS, `@layer` provides a way to group rules together in order to override other rules for better control of the styling order.

This page goes over how Stylable handles `@layer`, for more details about the language feature itself, check out the following resources:

- [MDN @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [The Future of CSS: Cascade Layers by Bramus](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
- [CSS cascade spec](https://drafts.csswg.org/css-cascade-5/#layering)

## Syntax

**Layer order definition**

```css
@layer base, layout, theme;
```

**Layer style definition**

```css
@layer theme {
  /* layer style rules */
}
```

**Nested style definition**

```css
@layer theme {
  @layer app {
    /* layer style rules */
  }
}

/* equivalent to */

@layer theme.app {
  /* layer style rules */
}
```

## Import and Export

An exported layer definition can be imported into another stylesheet with the [`@st-import`](./imports.md) atrule.

**Insert rules into imported layer**

```css
/* get base layer definition from another stylesheet */
@st-import [layer(base)] from './x.st.css';

/* insert rules into layer */
@layer base {
  /* layer style rules */
}
```

**More import examples**

```css
/* map 'base' layer to local name 'x-base' */
@st-import [layer(base as x-base)] from './x.st.css';

/* import multiple layers */
@st-import [layer(layerA, layerB)] from './x.st.css';
```

### Native CSS import

CSS native [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) can be used to import a stylesheet into a layer:

```css
/* import the content of 'other.css' in the base layer */
@import url(./x.css) layer(base);
```

:::caution

While Stylable collects and namespaces layer definitions from native CSS imports, it does not handle bundling of them at current time, and they are not recommended for use.

:::

## Runtime

A layer can be accessed for dynamic styles using the `layers` mapping on the **Stylable** runtime stylesheet:

```js
import { layers } from './sheet.st.css';

// map to target namespaced layer
layers['layer-name'];
```

## Namespace

Stylable automatically namespaces any layer name according to the stylesheet it is defined in:

Source:

```css
@layer base, layout, theme;
```

Output:

```css
@layer ns__base, ns__layout, ns__theme;
```

### Disable namespace

In some cases the default namespace behavior is unwanted, for example when a layer is external and not defined or imported by Stylable. In such cases, `st-global` can be used to mark a layer definition as global:

```css
/* keep the layer name as-is with no namespace */
@layer st-global(external);
```

Once a layer is marked as global, all references to that layer transpile to the un-namespaced name (nested or imported).

> Notice that `st-global` is not supported in nested definitions (e.g. `a.st-global(external).c`) or native import (e.g. `@import url() layer(st-global(external))`), but marking the layer as global in a later definition will keep it global everywhere.
