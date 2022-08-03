---
id: namespace
title: Namespace
---

## Manual Namespace

When you develop your application in **Stylable**, you can manually namespace classes so you can more easily identify them when they are displayed in the CSS output. You do this in your **Stylable** stylesheet by adding the syntax `@st-namespace` to provide better display names to your classes.

<!-- prettier-ignore-start -->
```css title="x.st.css"
@st-namespace "y";
.root {
  color: red;
}

/* OUTPUT */
.y__root {/* use @st-namespace value instead of file name */
  color: red;
}
```
<!-- prettier-ignore-end -->

:::note

Because `@st-namespace` is not unique, the scoped name may still have a suffix added to it to make it unique during build.

:::
