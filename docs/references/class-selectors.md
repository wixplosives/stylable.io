---
id: class-selectors
title: Class Selector
---

A CSS `class selector` is used as a generic way to target a DOM element with a matching `class name`. In Stylable a CSS class is used primarily as a component part, for example a `.navBtn` of gallery component, but can also be used as utility class or a mixin.

This page goes over how Stylable handles `class selector`, for more details about the language feature itself, checkout the following resources:
- [MDN class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) 
- [class selector in spec](https://drafts.csswg.org/selectors/#class-html)

## Syntax

To define a `class symbol`: set a `class selector` anywhere in a stylesheet. 

**Standalone definition**
```css
.navBtn {}
```

**In-selector definition**
```css
/* compound */
button.navBtn.baseBtn {}

/* multiple selectors */
.navBtn, .thumb {}
```

## Root

The `.root` class has a special meaning in Stylable stylesheets. Every stylesheet has a root to represent the root element of the component or page of the stylesheet - [see root reference](./root.md).

## Import and Export

A class selector can be imported into another stylesheet with the [`@st-import`](./imports.md) atrule.

**Import class by name**
```css
/* reference the navBtn class  */
@st-import [navBtn] from './gallery.st.css';

/* reference multiple classes */
@st-import [navBtn, thumb] from './gallery.st.css';

/* map imported class to local name "galleryNavBtn" */
@st-import [navBtn as galleryNavBtn] from './gallery.st.css';
```

**Import stylesheet `root` class**
```css
/* get the gallery root class (default export) */
@st-import Gallery from './gallery.st.css';

/* reference the gallery named root class */
@st-import [root as GalleryRoot] from './gallery.st.css';
```

:::tip

While any valid ident can be used for the default root import, It is recommended to capitalize the name to signify it represents a component element.  

:::

## Runtime

A class can be accessed using the `classes` mapping on the Stylable stylesheet runtime.

```js
import { classes } from "./gallery.st.css";

// map from local name to target class name
classes.part;
classes.root;
classes['dashed-class'];
```

Use the class mapping to bind the stylesheet to the rendered view:

**React example**
```js
/* gallery.jsx */
import { st, classes } from "./gallery.st.css";

function Gallery(props) {
  return (
    <div className={st(classes.root, props.className)}>
      <button className={classes.navBtn}>next</button>
      <button className={classes.navBtn}>prev</button>
    </div>
  );
}
```

:::note

In the component example above, we call the [st() function](./runtime.md#st-function) in order to pass both the gallery root class and any class name provided externally in order to style the component from the outside. 

:::

## Namespace

Stylable automatically [namespaces](../guides/handbook/namespace.md) any class selector according to the stylesheet it is defined in:

```css
.a {}

/* OUTPUT */
.NAMESPACE__a {}
```

### Disable in selector

Wrapping a class selector with `:global()` pseudo-class prevents namespacing:

```css
:global(.icon-heart) {}

/* OUTPUT */
.icon-heart {}
```

[see `global selector` reference](./global-selectors.md)

### Map to global selector

Class selector can be mapped to a custom global selector with the `-st-global` declaration:

**Map to global class**
```css
.button {
  -st-global: '.myLib__button';
}
.button:hover {}

/* OUTPUT */
.myLib__button {}
.myLib__button:hover {}
```

**Valid values**
```css
/* global selector */
.x { -st-global: '.a' }

/* compound selector of multiple classes */
.x { -st-global: '.a.b' }

/* complex selector (runtime `classes.x` not exported) */
.x { -st-global: '.a .b' }

/* non class selectors (runtime `classes.x` not exported) */
.x { -st-global: '[c]' }
.x { -st-global: '.a[c]' }
```

**Invalid values**
```css
/* empty selector */
.x { -st-global: '' }
/* only a single selector is supported */
.x { -st-global: '.a, .b' }
```

## Related

- [Style pseudo-elements](./pseudo-elements.md)
- [Use CSS mixins](./mixins.md)
