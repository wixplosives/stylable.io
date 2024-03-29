---
id: stylable-application
title: Build a Stylable Application
sidebar_label: Stylable Application
---

When building a **Stylable** application, you want to share definitions between parts of the application and consume 3rd party **Stylable** component libraries.

## The `project.st.css` file

It is recommended to have a [project commons stylesheet](./project-commons.md) that includes:

- Shared common CSS definitions between parts of the project:
  - [variables](../references/variables.md) - values to reuse in declarations
  - [shared classes](./shared-classes.md) - classes that can be reused in components
  - [component variants](./component-variants.md) - semantic component classes

An application would define CSS with the final style definitions:

```css title="project.st.css"
:vars {
  color1: white;
  color2: red;
  fontbig: 30px;
  fontsmall: 10px;
}
@st-import Button from "./button/button.st.css";

.cancelButton {
  -st-extends: Button;
  color: value(color1);
  background: value(color2);
}
```

## Stylable component

The [Stylable component best practices guide](./component-best-practices.md) describes ways to design a good component that can be styled. However, when building your application, it is also common to define components with their final CSS. This makes them less "themable", but is much simpler.

In the following code you can see a component that is described with:

- 2 colors used from project
- 1 component variant

```css title="dialog.st.css"
@st-import [color1, color2, cancelButton] from "./project.st.css";
@st-import Button from "./button/button.st.css";

.root {
  color: value(color1);
  background: value(color2);
}
.ok {
  -st-extends: Button;
}
.cancel {
  -st-extends: cancelButton;
}
```
