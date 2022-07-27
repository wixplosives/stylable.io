---
id: runtime
title: Runtime
---

Imported Stylable stylesheets in JS contain minimal runtime code to help define the structure and state of the component.


<!-- prettier-ignore-start -->
```js
/* index.jsx - stylesheet runtime api */
import {
    st,        // runtime utility function
    classes,   // class mapping
    vars,      // custom properties mapping
    stVars,    // stylable build-time variable values
    cssStates, // utility function for setting stylable states
    keyframes, // keyframes mapping
    layers     // layer mapping
}  from "style.st.css";
```
<!-- prettier-ignore-end -->

## Manual mapping

Any namespaced symbols, defined in the stylesheet, are exposed on maps from their local name to their target namespaced name:

<!-- prettier-ignore-start -->
```js
import { classes, vars, keyframes, layers } from 'style.st.css';

// class mapping
classes.root;            // "style__root"
classes.label;           // "style__label"
classes.icon;            // "style__icon"
classes['dashed-part'];  // "style__dashed-part"

// custom property mapping
vars.color1              // "--style-color1"

// keyframes
keyframes.slide          // "style__slide"

// keyframes
layers.theme             // "style__theme"
```
<!-- prettier-ignore-end -->

:::note

The [root class](../references/root.md) is available even when it is not defined in the stylesheet.

:::

## Build vars

Local stylesheet [build vars](./variables.md) are exported with their set value.
<!-- prettier-ignore-start -->
```css
:vars {
    bg: black;
    color: gold;
}
```

```js
import { stVars } from 'style.st.css';

stVars.bg;    // "black"
stVars.color; // "gold"
```
<!-- prettier-ignore-end -->

## `st()` function

A utility function for concatenating [classes](./class-selectors.md) and [custom states](./pseudo-classes.md).

- the **second argument** can optionally receive state activation
- multiple classes can be added with additional arguments

**Multiple classes**
```js
import { st, classes } from 'style.st.css';

// namespaced part class + additional class
st(classes.part, 'additional');  // "style__part additional"

// namespaced part class + multiple classes
st(classes.part, 'a', 'b', 'c'); // "style__part a b c"

// undefined is ignored
st(classes.part, 'a', undefined, 'c'); // "style__part a c"
```

**State activation**
```js
import { st, classes } from 'style.st.css';

// namespaced a + isOn boolean state
st(classes.a, {isOn: true}); // "style__a style--isOn"

// namespaced a + multiple states
st(classes.a, {x: true, y: false}); // "style__a style--x"

// namespaced a + parameter
st(classes.a, {rank: 'first'}); // "style__a style--rank-5-first"
```

**State activation + additional classes**
```js
import { st, classes } from 'style.st.css';

// namespaced a + isOn state + x class
st(classes.a, {isOn: true}, 'x'); // "style__a style--isOn x"
```

## Custom state mapping

The `cssStates` function can be used to produce just the active [custom state](../references/pseudo-classes.md) classes.

The function accepts a map of local state names and generates a string with concatenated class names used to mark the element's state.

```js
import { cssStates } from 'style.st.css';

// single state
cssStates({ selected: true }); // "style--selected"

// un-active state
cssStates({ selected: false }); // ""

// string/enum state
cssStates({ rank: 'first' }); // "style--rank-5-first"

// multiple states
cssStates({ a: true, b: false, c: true }); // "a c"
```