---
id: tag-selectors
title: Type Selector
---

Like CSS [type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors), **Stylable** element `Type selectors` can match the names of elements in the DOM.

Element type selectors are **not** scoped themselves. Other selectors used with an element selector can be scoped. For example if a [class selector](./class-selectors.md) is used with a element selector, the class is scoped and the element selector is not. The matching qualified name of an element selector can therefore target any element in the subtree of the component.

## Native element

Targeting a native element matches any element with the same element name that is found in a prefix selector. The prefix selector could be a class selector or the root.

To target **all** elements of a certain type in your project, use a [`global selector`](./global-selectors.md).

```css title="page.st.css"
.root form {
  background: green;
}
.sideBar:hover form {
  background: red;
}
:global(span) {
  background: blue;
}

/* OUTPUT - form is scoped to the page - affects any nested instance */
.page__root form {
  background: green;
}
.page__sideBar:hover form {
  background: red;
}
span {
  /* affects *ALL* spans in your application */
  background: blue;
}
```

:::note

The value `form` itself is not namespaced.

:::

```jsx title="comp.jsx"
import React from 'react';
import { style, classes } from './comp.st.css';

class Comp extends React.Component {
  render() {
    return (
      <div className={style(classes.root, this.props.className)}>
        <div className={classes.sideBar}>
          <form /> /* green background and red while hovering parent */
        </div>
        <form /> /* green background */
        <span /> /* blue background */
      </div>
    );
  }
}
```

## Component element

When the value of a stylesheet is [imported](./imports.md) with a **capital first letter**, it can be used as a component element selector.

```css title="page.st.css"
@st-import ToggleButton from "./toggle-button.st.css";

.root ToggleButton {
  background: green;
}
.sideBar:hover ToggleButton {
  background: red;
}

/* OUTPUT - ToggleButton is scoped to the page, affects any nested toggle button */
.page__root .toggleButton__root {
  background: green;
}
.page__sideBar:hover .toggleButton__root {
  background: red;
}
```

```jsx title="comp.jsx"
import React from 'react';
import { style, classes } from './comp.st.css';

/* React implementation - button component uses toggle-button.css */
import ToggleButton from './toggle-button';

class Comp extends React.Component {
  render() {
    return (
      <div className={style(classes.root, this.props.className)}>
        <div className={classes.sideBar}>
          <ToggleButton /> /* green background and red while hovering parent */
        </div>
        <ToggleButton /> /* green background */
      </div>
    );
  }
}
```
