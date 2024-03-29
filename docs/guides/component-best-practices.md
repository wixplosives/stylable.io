---
id: component-best-practices
title: Stylable Component - Best Practices
sidebar_label: Component Best Practices
---

**Stylable** components should be easily stylable and themable from the outside. This means that the stylesheet describing the component CSS should be as **simple** and **generic** as possible, and should expose a clear and concise API for its internal parts.

When building your components, we recommend following the guidelines below that we've collected through our work with **Stylable**:

## Avoid size declarations

Try avoiding size declaration just because it offers an easier API. To override a component specifying size limitations, you would need to override multiple CSS declarations.

If you do set a default size or size limitations, use `em/rem` units to resize to the HTML context.

## Give meaningful names

Give meaningful class names that will make sense as part of a selector. Any CSS class selector can be targeted from the outside as a [`pseudo-element`](../references/pseudo-elements.md) and should be considered part of the component API.

Use camelCase and avoid hyphens (-) and capital letters at the beginning.

```css
/* good */
Gallery::navbtn::label {
} /* camelCase with clear pseudo-element names  */
```

```css
/* bad */
Gallery::gallerynavbtn {
} /* it is better to reuse the generic component id */
Gallery::nav-btn {
} /* don't use kebab-case - stylable exports JS */
```

## Avoid global settings in your stylesheet

Try avoiding global-related selectors like `@media` or matching DOM outside the component scope like `body`. These would potentially cause side effects if others use them.

[Element type selectors](../references/tag-selectors.md) should be avoided inside a component because they affect any nested component or element. The exception to this is when specifically targeting the element with **child selector** (for example `.root > p`) and not a **descendant selector** (for example `.root p`).

## Keep your layout minimal

While internal structure does demand some CSS to work correctly, you should strive to find the minimal combination of CSS to make the component layout work as it should.

## Keep coloring to a minimum

The component stylesheet should describe the bare minimum coloring to make its parts visible. Colors should be used sparingly, and just to achieve visibility.

The best practice is to make sure every color used for a text across the project has a sufficiently contrasting background.

```css
.options {
  background: value(color1);
  color: value(color2);
}
```

## Keep browser defaults intact

Browsers add a default user agent stylesheet to provide the HTML with a default "style".

It is tempting to "clean up" a `button`'s default style in the component. But, we want our component to "blend in" in every context it's used. A button element in our component should look like other button tags in the context of the application where it is used.

As such, when building a component, it is best to set CSS only for behaviors that **must** be overridden for the component to function.

## Keep specificity low

Write low specificity selectors that will be easy to override from a parent component.

## Keep your selectors as simple as possible

It takes a more complex selector to override a high specificity selector that was defined in a component stylesheet.

Override CSS only for behaviors that **must** be overridden for the component to function, and minimize the use of `element type selectors` and `pseudo-elements` of nested components.

Styling pseudo-elements in a component creates a selector that takes more specificity to override

<!-- prettier-ignore-start -->
```css title="gallery.st.css"
/* 
> directly style navBtn - a type of button
selector: .comp__gallery .gallery__navBtn
specificity: 0,0,2,0 
*/
.gallery::navbtn {}
```

```css title="page.st.css"
/* 
> less specific than component override 
selector: .page__root button
specificity: 0,0,1,1
*/
.root button {}
```
<!-- prettier-ignore-end -->

:::note

For the `button` selector, we manually added the `.root` class to avoid overriding `button` outside this scope.

:::

## Justify your CSS declarations in comments

A good way to validate minimal CSS is to add comments. There should be a few words clarifying why a certain declaration or rule set combination is found in the stylesheet. We recommend you justify any special overrides or interactions with a comment per this example.

```css
.link {
  display: block;
  /* override default anchor color */
  color: currentColor;
}
```

This helps with maintenance and development, since we don't test CSS as thoroughly as other code.

## Use consistent variables from a central location

Import CSS or Stylable variables from the [project commons stylesheet](../guides/project-commons.md).

```css
@st-import [color1, --font-small] from "./project.st.css";

.item {
  background: value(color1);
  font-size: var(--font-small);
}
```

## Keep SVG and images overridable

When using an image element source or SVG directly in the DOM, it is not easy, and in some cases not possible, to modify the asset from outside the component using CSS.

When an asset is part of the style API, it should be placed in the background of an element, allowing it to be overridden from a parent component.
