---
id: shared-classes
title: Shared Classes
---

When building a component library or an application, it is useful to reuse classes that can be shared across components to achieve common CSS with lower specificity.

## Defining a shared class

In the [commons stylable stylesheet](./project-commons.md) of your project (usually named `project.st.css`), you define a CSS class with a descriptive name like `emphasisBox`.

```css title="project.st.css"
.emphasisBox {
  background: pink;
  color: white;
}
```

## Use shared classes in components

A component's **Stylable** stylesheet can use and extend shared classes:

<!-- prettier-ignore-start -->
```css title="comp.st.css"
@st-import [emphasisBox] from "./project.st.css";
/*
selector: .comp__root .project__emphasisBox
js value: "project__emphasisBox"
*/
.root .emphasisBox {}
/*
selector: .comp__messageBox.project__emphasisBox
js value: "comp__messageBox project__emphasisBox"
*/
.messageBox {
  -st-extends: emphasisBox;
}
```
<!-- prettier-ignore-end -->

:::note

For the `.emphasisBox` selector, we manually added the `.root` class to avoid overriding `emphasisBox` outside this scope.

:::
