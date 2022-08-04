---
id: project-commons
title: Project Commons
---

The goal of the project file is to contain the CSS commons for the project, including [variables](../references/variables.md), [component variants](./component-variants.md) and [shared classes](./shared-classes.md).

In the following code, you can see a project with:

- 2 color, 2 font and 1 spacing size variables
- 1 `Button` component variant named `cancelButton`
- 1 shared class for `emphasisBox`

<!-- prettier-ignore-start -->
```css title="project.st.css"
:vars {
  color1: #f012be;
  color2: #ff4136;
  fontbig: 2rem;
  fontsmall: 1rem;
  spacing: 6px;
}
@st-import Button from "./button/button.st.css";

.cancelButton {
  -st-extends: Button;
}
.emphasisBox {}
```
<!-- prettier-ignore-end -->

:::tip

We recommend calling the project commons file `project.st.css`.

:::
