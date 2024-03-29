---
id: stylable-component-library
title: Create a Stylable Component Library
sidebar_label: Stylable Component Library
---

Here are some guidelines we gathered related to this project that you may be interested in following if you build your own library.

**Stylable** enables you to author a component library, that can be themed, and easily consumed and styled, by other **Stylable** projects.

**Stylable** is the styling, CSS side of working with components. For the **Stylable** CSS to be fully useful, it must integrate with a component library from another source, for example React.

## Recommended folder structure

As a best practice, we recommend following this folder structure:

```
src/
    |
    --- components/
    |   |
    |   --- my-component/
    |   |   |
    |   |   my-component.jsx
    |   |   my-component.st.css
    |   |
    |   project.st.css
    |
    --- themes/
    |   |
    |   backoffice-theme.st.css
    |   app-theme.st.css
```

- The `src/components` folder contains:
  - a project stylesheet describing the project CSS API
  - a folder for each component with its stylable stylesheet
- The `src/themes` folder contains the relevant theme files.

:::tip

Although you may think the project file should be at the `src` level, we recommend you to create the `project.st.css` file at the same level as your components because there are many links between this file and your component files.

:::

## The `project.st.css` file

As a first step, create a [project commons stylesheet](./project-commons.md) named `project.st.css` in the `src/components` directory. This exposes the API for the project.

:::tip

It is recommended to leave the project's CSS rulesets empty with no declarations. These should be defined in a theme file.

:::

## Customizable components

Your components should be as easy to style as possible. We recommend following these guidelines when planning:

- Expose a good style API and its [custom states](../references/pseudo-classes.md).
- The component API should contain the minimum styling required for the component to function. For example some components may require layout.
- The effect of CSS combinations is not always easy to understood and styles are generally less tested, therefore, we recommend adding comments that explain the reason for unclear CSS.
- Reusable [vars](../references/variables.md) should be declared outside of the component. The component can use vars for common values that are less likely to be override-able.
- Use [component variants](./component-variants.md) and [shared classes](./shared-classes.md) from the project file (`project.st.css`).

More best practices for themable components can be found in the [**Stylable** component best practices guide](./component-best-practices.md).

In the following code, you can see a component described with:

- 2 colors used from project
- 1 shared class

```css title="app.st.css"
@st-import [color1, color2, emphasisBox] from "../project.st.css";

.root {
  color: value(color1);
  background: value(color2);
}
.messageBox {
  /* append emphasisBox CSS class to messageBox JS output */
  -st-extends: emphasisBox;
}
```

Read more about using themes in [theme an application](./stylable-application#apply-component-library-theme).
