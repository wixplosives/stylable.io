---
id: st-variables
title: Variables
---

Stylable variables provide a way to define common values to be used across the stylesheet and exposed for sharing and theming.
These variables are used only during build-time and have no runtime impact.

If you wish to use native dynamic variables, that can change value during runtime, see [css custom properties](./css-vars.md) for further details.

## Syntax

Use the `:vars` top level rule to define build variables.

### Define

To define a variable, add a variable declaration within a `:vars` ruleset.

```css
:vars {
  /* define x with value green */
  x: green;

  /* define y with value blue */
  y: blue;
}
```

### Evaluate

To get a variable value, use the `value()` function with the variable name as the first argument.

<!-- prettier-ignore-start -->
```css
.a {
  /* evaluate in declaration value */
  color: value(x);

  /* compose in declaration value */
  background: url(a.jpg) no-repeat, url(b.jpg) repeat-x value(x);
}

/* set media params from a variable */
@media value(y) {}
```
<!-- prettier-ignore-end -->

### Compose

Variables can be composed into a declaration value.

```css
:vars {
  x: green;

  /* define y with the value green from x */
  y: value(x);

  /* define z with composed x value */
  z: red, value(x), blue;
}
```

### Array

Use `st-array` to define a variable that holds a list of values that can be accessed by zero-based index.

```css
:vars {
  /* comma separated list */
  colors: st-array(red, green, blue);
}

.a {
  /* access 2nd cell value */
  color: value(colors, 1); /* green */
}
```

### Map

Use `st-map` to define a variable that holds key/value pairs that can be accessed by key.

<!-- prettier-ignore-start -->
```css
:vars {
  /* comma separated key/value pairs */
  colors: st-map(
    bg   black, 
    text gold,
  );
}

.a {
  /* access 'text' key value */
  color: value(colors, text); /* gold */
}
```
<!-- prettier-ignore-end -->

:::note map delimiters
Each key/value pair uses a space as a delimiter between them, and a comma separates each pair.
:::

<!-- ### Nested -->
<!-- ToDo: open this section once the referencing of array in map is fixed -->
<!-- In the same way `st-map` and `st-array` can be defined with nested values, they can also reference other variables. -->

<!-- prettier-ignore-start -->
<!-- ```css
:vars {
  / single value /
  singleColor: green;

  / reference variable and inline values /
  listOfColors: st-array(red, value(singleColor), blue);

  mapColorThemes: st-map(
    / inline list/
    monochrome st-array(white, grey, black),
    / referenced list variable /
    colorful value(listOfColors),
  );
}

.a {
  / access 'colorful' key and then index 1 /
  color: value(mapColorThemes, colorful, 1); / green /
}
``` -->
<!-- prettier-ignore-end -->

## Import and Export

An exported build variable can be imported into another stylesheet with the [@st-import](./imports) at-rule.

```css title="example2.st.css"
@st-import [color1] from "./common.st.css";

.a {
  /* compose color1 to border value*/
  border: 10px solid value(color1);
}
```

## Runtime

A build variable value can be accessed using the `stVars` mapping on the Stylable stylesheet runtime.

<!-- prettier-ignore-start -->
```jsx
import { stVars } from './common.st.css';

// map from local name to value
stVars.color1;         // "green"
stVars['dashed-name']; // "blue"
```
<!-- prettier-ignore-end -->

:::important only local export
Only build variables that are defined by the stylesheet are exported to Javascript - **imported onces are not!**
:::

## Custom variable

:::danger experimental
This API is not stable
:::

Composed data structures like `st-array` and `st-map` can be defined from Javascript. Take a look at `stBorder` from the [@stylable/custom-value](https://github.com/wix/stylable/tree/master/packages/custom-value) to see how it works.

```css title="stBorder usage example"
@st-import [stBorder] from "@stylable/custom-value";

:vars {
  /* order of arguments: size style color */
  myborder: stBorder(1px, solid, green);
}

.root {
  border: value(myBorder); /* 1px solid green */
  background-color: value(myBorder, color); /* green */
}
```
