---
id: root
title: Root
layout: docs
---

Every Stylable stylesheet has a reserved class called `root` that matches the root node of the component. The `root` class is used to signify the component top-level node where a new namespace scope is created.

<!-- prettier-ignore-start -->
```css
.root { 
  /* set component background */
  background: white; 
} 

/* OUTPUT */
.NAMESPACE__root { 
  background: white; 
}
```
<!-- prettier-ignore-end -->

## Default export

The root of a stylesheet can be referenced in other stylesheets by using the [default import](./imports.md#default-import).

<!-- prettier-ignore-start -->
```css title="page.st.css"
@st-import DropDown from './dropdown.st.css';

/* style any dropdown component background 
  nested under the page root */
.root DropDown {
  background: salmon;
}

/* OUTPUT */
.page__root .dropdown__root { 
  background: salmon; 
}
```
<!-- prettier-ignore-end -->

## Runtime

Each component is responsible for placing the `root` class on its top-level node using the [runtime API](./runtime.md).

### simple example

<!-- prettier-ignore-start -->
```jsx title="comp.jsx"
import { classes } from './comp.st.css';

function Comp() {
  return <div className={classes.root}></div>;
}
```
<!-- prettier-ignore-end -->

### root + state + customize

The following example uses the [st() function](./runtime.md#st-function) to add multiple classes:

1. the component root class
2. state classes
3. classes passed from props for customizations

<!-- prettier-ignore-start -->
```jsx title="comp.jsx"
import { st, classes } from './comp.st.css';

function Comp({ className }) {
  return (
    <div className={st(classes.root, {/*states*/}, className)}></div>
  );
}
```
<!-- prettier-ignore-end -->
