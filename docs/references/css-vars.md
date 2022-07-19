---
id: css-vars
title: Custom Property
---

`CSS Custom Properties` provides the ability to define and re-use variables that participate in the runtime cascade.

CSS Custom Properties are defined using the `--*` property syntax, and accessed using the `var(--*)` CSS function.

To learn more about this language feature, check out the following resources

- [MDN - Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Smashing Magazine - It's Time To Start Using CSS Custom Properties](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)

## Stylable variables vs. CSS custom properties

[Stylable variables](./variables.md) and CSS custom properties offer different capabilities, and as such serve different use-cases.

Stylable variables exist only in your source code, and get replaced during transpilation to the final target code. They serve well for calculations that are not supported by native CSS, reducing code repetition, increasing readability and can benefit any static theme or styling without incurring any runtime performance cost.

CSS custom properties on the other hand do incur a small runtime cost, but offer the ability to override their values during runtime, allowing dynamic styling through Stylable.

## Automatic scoping (namespacing)

Stylable automatically scopes any CSS custom property found in the stylesheet. It does so by generating a unique namespace for the stylesheet (similar to how classes are scoped), and replaces the variable with its scoped counterpart.

Example:

```css
/* entry.st.css */
.root {
  --myVar: green;
  color: var(--myVar);
}
```

Transpiled output:

```css
/* entry.st.css */
.root {
  --entry-myVar: green;
  color: var(--entry-myVar);
}
```

## Import a CSS variable

Due to the fact Stylable provides scoping to CSS variables, it also provides the ability to import CSS variables defined in another stylesheet.

```css
/* entry.st.css */
@st-import [--myVar] from "./imported.st.css";

.root {
  /* value determined by the nearest property assignment up the DOM tree */
  color: var(--myVar);
}

.part {
  /* this override will match the namespace of the imported stylesheet */
  --myVar: gold;
  background-color: var(--myVar); /* gold */
}
```

```css
/* imported.st.css */
.root {
  --myVar: green;
}
```

## Runtime custom property override

Override any variable by redefining its value using an inline style attribute.

```jsx
import { classes, vars } from "./entry.st.css";

<div
  className={classes.root}
  style={{
    [vars.myVar]: "pink",
    background: "gold",
  }}
/>;
```

Output:

```jsx
<div
  className="entry__root"
  style="--entry-color: green; --entry-border-size: 5px; background: gold;"
></div>
```

## CSS runtime register

Stylable supports the [@property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) at-rule, it scope the CSS variable and provide extra configuration at runtime:

```css
@property --myVar {
  syntax: "<color>";
  inherits: false;
  initial-value: #c3e88d;
}
```

:::info

`@property` definitions without a body are used only for defining a symbol and will be removed at the build process.

:::

## Use a global custom property

In cases where you have no control over the name of the CSS variable used, use the `@property` at-rule with `st-global` to define CSS variables that will not be scoped, and will maintain their exact given name.

This is mostly useful when working with 3rd-party libraries, where you only attempt to affect it externally.

```css
@property st-global(--color);

.root {
  --color: green;
  color: var(--color);
}
```

```jsx
import { classes } from "./entry.st.css";

<div className={classes.root} style={{ "--color": "red" }} />;
```

:::note

Accessing any globally defined variable on the stylesheet will return its global name (un-scoped).

:::
