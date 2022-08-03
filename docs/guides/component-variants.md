---
id: component-variants
title: Component Variants
---

When building a component library or an application, it is useful to define several semantic "flavors" of some components, for example a `Button` component that represents `cancel`.

## Defining a component variant

In your project's [Stylable stylesheet](./project-commons.md) used for the commonly used components in your project (usually named `project.st.css`) you:

1. Import a component stylesheet.
2. Define a CSS class with a descriptive name like `cancelButton`.
3. Extend the component on the class you just defined.

```css title="project.st.css"
@st-import Button from "./button.st.css";

.cancelButton {
  -st-extend: Button;
  color: red;
  border: 1px solid red;
}
```

## Use component variants in components

A component **Stylable** stylesheet can use and extend component variants:

<!-- prettier-ignore-start -->
```css title="comp.st.css"
@st-import [cancelButton] from "./project.st.css";

/*
selector: .comp__root .project__cancelButton.button__root
js value: "project__cancelButton"
*/
.root .cancelButton {
}
/*
selector: .comp__cancel.project__cancelButton.button__root
js value: "comp__cancel project__cancelButton"
*/
.cancel {
  -st-extends: cancelButton;
}
```
<!-- prettier-ignore-end -->

:::note

For the `.cancelButton` selector, we manually added the `.root` class to avoid overriding `cancelButton` outside of this scope.

:::
