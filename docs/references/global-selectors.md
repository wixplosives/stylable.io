---
id: global-selectors
title: Global Selector
---

In Stylable, selectors are namespaced to the stylesheet. However there might be cases where you want to target global selectors without Stylable namespacing them, For that you can use the `:global()` selector.

## Syntax

**Mark as global**
```css
:global(.g) {}

/* OUTPUT */
.g {}
```

**Valid cases**
```css
/* multiple classes */
:global(.g1.g2) {}

/* compound selector (`g` class not namespaced) */
.a:global(.g):hover.b {}
```

**Invalid cases**
```css
/* only a single selector is supported */
.a:global(.g1, .g2):hover.b {}
```
:::caution
Any definitions within the `:global(...)` pseudo-class are not treated as symbols in the stylesheet and are not exported. That means that they are not available for use in other stylesheets or in the runtime JavaScript module.
:::

## Force native

In case a class definition overrides a native `pseudo` with either [-st-states](./pseudo-classes.md#define-a-custom-pseudo-class) or a [custom pseudo-element](./pseudo-elements.md#override-a-custom-pseudo-element) then the `:global()` selector can be used to force the native:

**customInput with override `:selected`**
```css
CustomInput:selected {}
CustomInput:global(:selected) {}

/* OUTPUT */
.customInput__root.customInput--selected {}
.customInput__root:selected {}
```
