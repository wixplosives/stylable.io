---
id: classes-walkthrough
title: Classes
---

<!-- ## map style to view -->

Most basic building block of stylable, used to mark elements on the DOM, so those could in turn be targetted and styled via our CSS

## CSS classes

A CSS class starts with a `.` (period) following a CSS identifier. Read more about [CSS classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) in the MDN documentation.

```css
.okButton {
  background: green;
}
```

Here we define the class named `okButton` that will color the background of the element it targets with the color `green`.

## local-to-global

All CSS loaded to the browser for a given page is global, and so other stylesheets can create their own `okButton`, and conflict with our definition

To resolve this, we can use a BEM methodology (TODO: add link) to namespace our `okButton` class with a unique prefix.

```css
.dialog__okButton {
  background: green;
}
```

This solution works but is hard to scale, requires manual upkeep and makes our code more verbose than we'd like.

To solve this issue, Stylable offers automatic namepacing of CSS classes, and other symbols (more on that later).

## Runtime JS import - classes map

By turning the namespacing process to an automatic one, we find ourselves needing to map the runtime classes on the DOM to the original classes we defined in our stylesheet.

To access this class name mappings, we will import the stylesheet to our JavaScript, and utilize the `classes` object there.

```jsx
import { classes } from "./dialog.st.css";

console.log(classes.okButton); // dialog__okButton

<Button className={classes.okButton} />;
```

### camelcase recommendation

Due to the fact that these class symbols are generated from the stylesheet, but are also consumed in JavaScript, we recommend using camelCase for class names to avoid illegal variable names.
