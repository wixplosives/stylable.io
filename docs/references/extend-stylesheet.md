---
id: extend-stylesheet
title: Extend
---

The Stylable `-st-extends` declaration is used to indicate that a [CSS class](./class-selectors.md) inherits from a stylesheet or another class.

It assumes both the class and the extended reference will share the same element in the DOM, and enables the targeting of inner parts and states as an API with validations and completions.

## Syntax

Use `-st-extends` with the value of a component [stylesheet root](./root.md) to indicate that a class is used to customize the component, or with a value of another class to compose them (usually a utility class).

<!-- ToDo: add link to guides/patterns/utility-class once exist -->

**Extend a stylesheet root**

```css
@st-import Comp from './comp.st.css';

.x {
  -st-extends: Comp;
}
```

**Extend a class**

```css
@st-import [class] from './comp.st.css';

.x {
  -st-extends: class;
}
```

:::tip Local extends
Extend is not limited to imported definitions, a class can extend other local classes, as well as the local stylesheet root.
:::

## Example

The following example illustrates a page with a customized main gallery instance.

<!-- prettier-ignore-start -->
```css title="slider-gallery.st.css"
/* gallery style API */
.root {
  -st-states: pos(enum(start, middle, end));
}
.prevBtn {}
.nextBtn {}
```
<!-- prettier-ignore-end -->

Customizes the main gallery by importing the gallery component stylesheet into the page stylesheet, create a `mainGallery` class, extend it with the value of the gallery stylesheet, and then target it's inner [custom pseudo-elements](./pseudo-elements.md) and [custom pseudo-states](./pseudo-classes.md).

```css title="page.st.css"
@st-import SliderGallery from './slider-gallery.st.css';

.mainGallery {
  -st-extends: mainGallery; /* mainGallery is a SliderGallery */
}
.mainGallery::nextbtn {
  /* customize mainGallery inner nextBtn part */
}
.mainGallery:pos(end)::nextbtn {
  /* customize mainGallery in end position inner nextBtn part */
}
```

In the view, set the `mainGallery` class on the gallery instance.

```jsx title="page.jsx"
import SliderGallery from './slider-gallery';
import { classes } from './page.st.css';

const Page = () => {
  <div>
    /* customize SliderGallery as mainGallery */
    <SliderGallery className={classes.mainGallery} />
  </div>;
};
```

<!-- prettier-ignore-end -->

## Runtime - root vs class

There is a slight difference between the runtime output when extending a stylesheet root and extending a normal CSS class.

**A CSS class is composed to the runtime class name while a stylesheet root is not.**

This is because Stylable assumes that a stylesheet root will be set within the component that is being extended and composing it from the outside is redundant.

<!-- prettier-ignore-start -->
```css title="page.st.css"
@st-import Gallery from './gallery.st.css';
@st-import [center] from './utils.st.css';

.variant {
  -st-extends: Gallery;
}
.title {
  -st-extends: center;
}
```

```js title="page.jsx"
import { classes } from './page.st.css';

classes.variant // "page__variant"
classes.title   // "page__title utils__center"
```
<!-- prettier-ignore-end -->

:::info unsupported multiple extends
Stylable currently does not support extending multiple classes. We hope to introduce this capability in the future.
:::

## Namespace

`-st-extends` provides access to inner parts and states, but does not modify the namespace of the extending class.

<!-- prettier-ignore-start -->
```css title="page.st.css"
@st-import Gallery from './gallery.st.css';
.variant {
  -st-extends: Gallery;
}
.variant {}
.variant::navBtn {}
.variant:loading {}

/* OUTPUT */
.page__variant {}
.page__variant .gallery__navBtn {}
.page__variant.gallery--loading {}
```
<!-- prettier-ignore-end -->
