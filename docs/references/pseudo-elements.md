---
id: pseudo-elements
title: Pseudo-Element
---

In addition to CSS's native pseudo-elements, like `::before` and `::backdrop`, Stylable allow you to define custom pseudo-elements so that you can target and apply styles to inner parts of your components.

This page goes over how Stylable handles custom pseudo-elements, for more details about the language feature itself, checkout the following resources:

- [MDN pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [pseudo-element in spec](https://www.w3.org/TR/CSS22/selector.html#pseudo-element-selectors)

## Syntax

To target an internal element, Use the pseudo-element prefix `::` with the part name.

<!-- prettier-ignore-start -->
```css
Component::firstlevel::secondlevel {}
```
<!-- prettier-ignore-end -->

:::info deep pseudo-elements
Custom pseudo-elements are not limited to the end of a selector like native pseudo-elements, and can be chained. For example, you can access the label of a navigation button from a gallery: `Gallery::navBtn::label`
:::

## Style a component

Customizing **all component instances** nested under a stylesheet using the imported [component type selector](./tag-selectors.md#component-element).

<!-- prettier-ignore-start -->
```css
@st-import Comp from './comp.st.css';

/* target Comp internal part */
.root Comp::part {/* customize */}
```
<!-- prettier-ignore-end -->

## Style a variant

Customizing a variant class of a component by [extending](./extend-stylesheet.md) a class with the component stylesheet.

<!-- prettier-ignore-start -->
```css title="page.st.css"
@st-import Comp from './comp.st.css';

.compVariant {
  /* set compVariant to inherit from Comp */
  -st-extends: Comp;
}
/* target compVariant internal part (inherited from Comp) */
.compVariant::part {/* customize */}
```
<!-- prettier-ignore-end -->

Then set the variant class to the component instance.

<!-- prettier-ignore-start -->
```jsx title="page.jsx"
import Comp from './comp';
import { classes } from './page.st.css';

const Page = () => {
  return (
    <div>
      /* customize Comp with compVariant class */
      <Comp class={classes.compVariant}>
    </div>
  );
};
```
<!-- prettier-ignore-end -->

## Define

Any [CSS class](./class-selectors.md) that is exported from a stylesheet is accessible as a pseudo-element.

<!-- prettier-ignore-start -->
```css title="comp.st.css"
/* available as ::part for this stylesheet */
.part {} 
```
<!-- prettier-ignore-end -->

Additionally a [custom-selector](./custom-selectors.md) defined within a stylesheet is exposed as a custom pseudo-element and will take precedence over a class with the same name.

<!-- prettier-ignore-start -->
```css title="comp.st.css"
/* available as ::part for this stylesheet
   and preserves the direct child combinator
   when used */
@custom-selector :--part .root > .part; 
```
<!-- prettier-ignore-end -->

:::caution Native pseudo-element override
Override of native pseudo-elements is possible, however it is **strongly discouraged**.
:::

### Element inheritance

An extending [stylesheet root](./root.md) automatically inherits any pseudo-elements from the extended definition, and can then override them by defining its own public parts.

<!-- TODO: add example here -->

## Build transformation

Custom pseudo-elements are transformed in build-time to target the internal selector they represent.

<!-- prettier-ignore-start -->
```css title="comp.st.css"
.part {}
@custom-selector :--directPart .root > .part; 
```

```css title="page.st.css"
@st-import Comp from './comp.st.css';

.root {
  -st-extends: Comp;
}

.root::part {}
.root::directPart {}

/* OUTPUT */
.page__root .comp__part {}
.page__root > .comp__part {}
```
<!-- prettier-ignore-end -->
