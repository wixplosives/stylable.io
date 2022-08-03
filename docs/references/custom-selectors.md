---
id: custom-selectors
title: Custom Selector
---

You use [custom selectors](https://drafts.csswg.org/css-extensions/#custom-selectors) to define an alias that can match complex selectors.

For example, a specific type of button within a form that appears only when hovered can be defined as a custom selector. By defining the button as a custom selector with its own name, the button is exposed in the API and available for use by using just the custom selector name.

You could also use custom selectors to define a group of selectors with one name. For example, you can access all the headings on a page as one custom selector. This could be useful if you want to style just their color the same.

## Usage

The following code maps the alias name `controlBtn` that matches any `.btn` CSS class nested under the `.controls` CSS class.

```css title="comp.st.css"
@custom-selector :--controlBtn .controls .btn;
/* 
selector: .comp__controls .comp__btn 
*/
:--controlBtn {
  border: 1px solid grey;
}
/* 
selector: .comp__controls .comp__btn:hover 
*/
:--controlBtn:hover {
  border-color: red;
}
```

### Expose pseudo-element

Custom selectors generate a [pseudo-element](./pseudo-elements.md). So, for example, [importing](./imports.md) a stylesheet into another stylesheet enables access to the `controlBtn` pseudo-element. In this example, the stylesheet `comp.st.css` from the previous example is imported into this stylesheet.

```css title="page.st.css"
@st-import Comp from "./comp.st.css";

/*
selector: .comp__root .comp__controls .comp__btn
*/
Comp::controlbtn {
  background: gold;
}
```

:::caution

If a `custom-selector` alias conflicts with a local CSS class name, the exposed `pseudo-element` targets the `custom-selector`. However, the exported CSS class is still exported to JavaScript.

:::

## Use cases

The following examples demonstrate how to effectively use custom selectors in **Stylable**.

### Container and recursive components

Some components might contain nested instances of themselves because they're a container or a "recursive" component. For example, a tree component might render itself.

If the component exposes any `pseudo-elements`, it is a good practice to define them as `custom selectors` with [child selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) to avoid affecting the inner parts of internal instances.

The following example shows how a tree component exposes an icon.

```css title="tree.st.css"
@custom-selector :--icon .root > .icon;
```

Here you can use the icon `custom selector` from the outside just like you would use any other `pseudo-element`.

```css title="panel.st.css"
@st-import Tree from "./tree.st.css";

/*
selector: .tree__root > .tree__icon
*/
Tree::icon {
  background: yellow; /* paints the icons all the way down the tree */
}
```

### Expose inner parts that are deeply defined

When you want to make internal parts of your component API more accessible, you can describe `pseudo-elements` using `custom selectors`.

For example, you can expose a `pseudo-element` named `navigationBtn` that enables you to style an internal gallery component's `navBtn` element.

```css
@st-import Gallery from "./gallery.st.css";

@custom-selector :--navigationBtn Gallery::navbtn;
```

### Combination selector

You may have a component with several basic CSS classes and with corresponding `pseudo-elements`. You could expose a combination `pseudo-element`.

For example, a `pseudo-element` named `navBtn` matches any `btn` CSS class nested in a `nav` CSS class.

```css title="comp.st.css"
@custom-selector :--navBtn .nav .btn;
```

```css title="page.st.css"
@st-import Comp from "./comp.st.css";

/*
selector: .comp__root .comp__nav .comp__btn
*/
Comp::navbtn {
  border: 1px solid grey;
}
```

### Group of selectors

You could also use custom selectors to gather a collection of selectors into a single selector. For example, you may want to access media that includes both images and videos.

```css title="comp.st.css"
@custom-selector :--media .image, .video;
/*
selector: 
.comp__image, .comp__video 
*/
:--media {
  border: 1px solid grey;
}
```

#### Issues to consider

Aliasing multiple selectors in a `custom selector` may generate lots of CSS that could affect performance.

For example, when you import the `Comp` stylesheet (the selector described in the previous example) into another stylesheet, in the output the selector is split for each override.

```css title="page.st.css"
@st-import Comp from "./comp.st.css";

Comp::media {
  border-color: red;
}

/* OUTPUT */
.comp__root .comp__image,
.comp__root .comp__video {
  border-color: red;
}
```
