---
id: css-vars
title: Custom Property
---

CSS `custom property` is used to dynamically pass custom values at runtime.

This page goes over how Stylable handles with `custom properties`, for more details about the language feature itself, checkout the following resources:

- [MDN custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)
- [MDN var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)
- [MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Smashing Magazine - It's Time To Start Using CSS Custom Properties](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)

## syntax

A CSS custom property name must start with the `--` prefix.

### Get / Set

A custom property can be referenced from a `declaration property` or within a value `var()` call:

```css
.a {
  /* set */
  --x: green;
}
.a .b {
  /* get */
  color: var(--x);
}
.b {
  /* fallback to yellow if property is unset */
  color: var(--notSet, yellow);

  /* fallback to --x if property is unset */
  color: var(--notSet, var(--x));
}
```

:::note no explicit definition
A custom property can be set and used without an explicit `@property` definition
:::

### Runtime definition

Use `@property` at-rule to register a configuration for a runtime property:

<!-- prettier-ignore-start -->
```css
/* runtime type definition */
@property --x {
  syntax: '<color>';     /* type */
  inherits: true;        /* is taken from cascade */
  initial-value: green;  /* default when unset */
}

.b {
  /* get green from initial value
     if --x is unset */
  color: var(--x);
}
```
<!-- prettier-ignore-end -->

### Build only definition

To define a custom property to be used outside of stylesheet, without explicitly registering it in runtime or using it as a declaration property or value, you can define the `@property` at-rule without a body:

```css
@property --x;
```

:::info removed at build
A property with no configuration body is removed at `build-time` as it is un-useful at `runtime`
:::

## Comparison to build vars

[Stylable variables](./variables.md) (build vars) and CSS custom properties offer different capabilities, and as such serve different use-cases.

Stylable variables exist only in your source code, and get replaced during build. They serve well for calculations that are not supported by native CSS, reducing code repetition, increasing readability and can benefit any static theme or styling without incurring any runtime performance cost.

CSS custom properties on the other hand do incur a small runtime cost, but offer the ability to override their values during runtime, allowing native CSS dynamic styling.

## Import and Export

An exported custom-property can be imported into another stylesheet with the [@st-import](./imports.md#named-import) at-rule.

```css
@st-import [--x] from "./common.st.css";

.a {
  /* get --x value */
  color: var(--x);
}

.b {
  /* set/override --x value */
  --x: gold;

  /* get override 'gold' value */
  background-color: var(--x); /* gold */
}
```

## Runtime

A custom property can be used dynamically in JavaScript.

<!-- prettier-ignore-start -->

```css title="comp.st.css"
@property --x;
```

```jsx title="comp.jsx"
import { vars } from './comp.st.css';

/* inline style set property value */
<div style={{ [vars.x]: 'pink' }} />;
```

<!-- prettier-ignore-start -->

## Namespace

Stylable automatically namespace any CSS custom property name according to the stylesheet it is defined in.

```css
@property --x {
  syntax: '<color>';
  inherits: true;
  initial-value: green;
}
.a {
  --x: var(--x);
}

/* OUTPUT */
@property --NAMESPACE-x {
  syntax: '<color>';
  inherits: true;
  initial-value: green;
}
.NAMESPACE__a {
  --NAMESPACE-x: var(--NAMESPACE-x);
}
```

### Disable namespace

In some cases the default namespace behavior in unwanted. In such cases, `st-global` can be used to mark a custom property definition as global.

```css
@property st-global(--x) {
  syntax: '<color>';
  inherits: true;
  initial-value: green;
}

.a {
  --x: var(--x);
}

/* OUTPUT */
@property --x {
  syntax: '<color>';
  inherits: true;
  initial-value: green;
}

.NAMESPACE__a {
  --x: var(--x);
}
```
