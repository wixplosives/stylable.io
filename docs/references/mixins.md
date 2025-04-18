---
id: mixins
title: Mixins
---

**Stylable** mixins enable you to reuse complex styles and CSS behaviors, defined in CSS or Javascript, and apply them to any style-rule during build time.

Here are some examples of when you can use mixins:

- Presets/Variants - create reusable pieces of styling CSS
- Layouts - easily describe complex layouts
- Effects - easily describe complex effects
- Macros - use code to define the CSS macros you need

:::tip

If you need to return only a single declaration value using code, we recommend instead using [formatters](./formatters.md).

:::

## CSS mixins

Any CSS stylesheet, class or element that is defined in a **Stylable** CSS file can be used as a mixin source. You can use either a local class or element, or import the mixin from a different stylesheet.

In the following example, a locally defined class is used as a mixin in the same stylesheet.

```css
.style-mixin {
  color: green;
  background: yellow;
}
.someClass {
  -st-mixin: style-mixin;
}
```

```css
/* CSS output */
.someClass {
  color: green; /* from local mixin */
  background: yellow; /* from local mixin */
}
```

Here is an example of a **Stylable** CSS file that is imported and mixed into the classes of a different stylesheet. The `.rootMixedIn` class as a stylesheet and `classMixedIn` as a class.

```css
/* mixins.st.css */
.root {
  color: purple;
}

.someClass {
  color: green;
}
```

```css
/* example.st.css - imports the above mixin */
@st-import MixRoot, [someClass] from "./mixins.st.css";

.rootMixedIn {
  -st-mixin: MixRoot; /* stylesheet mixin */
}

.classMixedIn {
  -st-mixin: someClass; /* class mixin */
}
```

```css
/* CSS output */
.rootMixedIn {
  color: purple; /* from stylesheet mixin */
}

.rootMixedIn .someClass {
  /* ruleset added as a result of the stylesheet mixin */
  color: green;
}

.classMixedIn {
  color: green; /* from class mixin */
}
```

### Variable overrides

CSS mixins can accept named parameters in the following format:

```css
mixin(variableName valueOverride, variableName2 valueOverride2)
```

Multiple variables can be comma separated or written on multiple lines:

```css
mixin (
    variableName valueOverride,
    variableName2 valueOverride2
)
```

Using parameters in a mixin enables you to override specific [variables](./variables.md) inside of a mixin before they are applied.

Here is an example of using a variable in a CSS mixin and how it can be overridden by the mixin's parameter value.

```css
:vars {
  color1: green;
}

.classToMixin {
  background: value(color1);
}

.targetClass {
  -st-mixin: classToMixin(color1 orange);
}
```

```css
/* CSS output */
.classToMixin {
  background: green; /* from local class */
}

.targetClass {
  background: orange; /* from mixin with override */
}
```

## Partial CSS mixins

Partial CSS Mixins (`-st-partial-mixin`) is a continuation of the idea of mixins with parameter overrides. (as described above)

Where a regular `-st-mixin` includes all declarations inside the targeted mixed-in class, partial mixins enable you to pass through overriding variable values and mix in only declarations that would be affected by such an override.

For a partial mixin to work, at least one overriding variable must be provided, additional ones being optional.

#### Example

```css
:vars {
  color1: red;
  color2: green;
}

.my-mixin {
  background: value(color1);
  color: value(color2);
}

.container {
  -st-partial-mixin: my-mixin(color1 gold);
}
```

```css
/* output */
.container {
  background: gold;
}
```

A partial mixin will include any declaration in the mixed-in class (or rules containing the mixed-in class) that contains a variable usage that will be overridden. Any other variables not overridden inside the mixed in declaration will retain their original values.

#### Example

```css
:vars {
  color1: red;
  color2: green;
  size1: 2px;
}

.my-mixin {
  background: value(color1);
  color: value(color2);
}

.my-mixin .part {
  border: value(size1) solid value(color2);
}

.container {
  -st-partial-mixin: my-mixin(color1 gold, size1 5px);
}
```

```css
/* output */
.container {
  background: gold;
}

.container .part {
  border: 5px solid green;
}
```

## JavaScript mixins

JavaScript mixins allow you to create complex structures in CSS based on the arguments passed to the mixin.

A JavaScript mixin returns a CSS fragment which can contain multiple declarations with optional sub style-rules.

Arguments are passed to the mixin as a string argument and it's the mixin's responsibility to parse them.

Here is an example of a mixin receiving multiple arguments and returning multiple declarations into the target ruleset.

```js
/* file my-mixin.js */
module.exports = function colorAndBg([color, bgColor]) {
  /* arguments: array of string types */

  return {
    color: color,
    background: bgColor,
  };
};
```

```css
/* file example.st.css */
@st-import colorAndBg from "./my-mixin";

.codeMixedIn {
  -st-mixin: colorAndBg(green, orange);
  font-family: monospace;
}
```

```css
/* CSS output */
.codeMixedIn {
  color: green; /* from JS mixin */
  background: orange; /* from JS mixin */
  font-family: monospace; /* from local class */
}
```

### Create multiple style-rules

Mixins can return multiple style-rules that are mixed into the target stylesheet. These style-rules can be written with the following syntax options:

- `selector` - resulting ruleset is appended as a descendent selector to its mixed in target (in below example `.otherClass`)
- `&selector` - resulting ruleset references the parent selector into which it was mixed in (in below example `&:hover`, the parent selector is `.codeMixedIn`)

```js
/* file my-mixin.js */
module.exports = function complexMixin([color, bgColor]) {
  /* arguments: array of string types */

  return {
    color: color,
    background: bgColor,
    '&:hover': {
      color: 'gold',
    },
    '.otherClass': {
      color: 'purple',
    },
  };
};
```

```css
/* file example.st.css */
@st-import complexMixin from "./my-mixin";

.codeMixedIn {
  -st-mixin: complexMixin(green, orange);
  font-family: monospace;
}
```

```css
/* CSS output */
.codeMixedIn {
  color: green; /* from JS mixin */
  background: orange; /* from JS mixin */
  font-family: monospace; /* from local class */
}

.codeMixedIn:hover {
  /* from JS mixin with & */
  color: gold;
}

.codeMixedIn .otherClass {
  /* from JS mixin with appended selector */
  color: purple;
}
```

## How mixins are applied

Mixins can add CSS declarations to the CSS ruleset to which they are applied.

Rules are added at the position in the CSS where the `-st-mixin` is declared.
Any selectors that are appended as a result of the mixin are added directly after the ruleset that the mixin was applied to.

You can apply multiple mixins from either CSS or JavaScript, or both separated by comma `-st-mixin: mixinA, mixinB`.
Multiple mixins are applied according to the order that they are declared left to right.

## Considerations when using mixins

Take a look at these considerations before working with **Stylable** mixins.

### Escape special characters

You can escape special characters by wrapping them with quotes or using a backslash (`\`).

Example:

```css
.x {
  /* use quotations to include comma */
  -st-mixin: mix(300, 'xx,x'); /* ["300", "xx,x"] */
}
```

They can also be used to include quotes or backslashes as part of the parameter.

```css
.y {
  /* escape slashes */
  -st-mixin: mix(300, '"xxx"'); /* ["300", "\"xxx\""] */
}
```

### Circular references

It is possible to reach a state where you have circular references between mixins. These cannot be resolved, and a diagnostics warning is issued in your **Stylable** code intelligence and build process.
