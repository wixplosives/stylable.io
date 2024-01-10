---
id: pseudo-classes
title: Pseudo-Class
---

In addition to CSS's native `pseudo-classes`, like `:hover` and `:nth-child()`, Stylable allow you to define custom pseudo-classes so that you can apply styles to your components based on state. Let's say you want a component to have different styling applied to it when its content is loading. You can define `loading` as a custom pseudo-class and toggle it in your component.

This page goes over how Stylable handles custom `pseudo-classes`, for more details about the language feature itself, checkout the following resources:

- [MDN pseudo-class](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes)
- [pseudo-class in spec](https://drafts.csswg.org/selectors/#pseudo-classes)

## Syntax

The Stylable `-st-states` declaration is used **on a class selector** to provide a list of the possible custom `pseudo-classes` that can later be targeted from CSS and controlled from JavaScript.

```css title="list of custom states"
.x {
  -st-states: stateA, stateB;
}
```

<!-- ```
<'-st-states'>            = <custom-pseudo-class-def>#

<custom-pseudo-class-def> =
  <ident> ||
  <ident>( [<enum-state> || <string-state> || <number-state>] ) <state-default-value>? ||
  <ident>(<string>)
``` -->

:::note allowed context
`-st-states` is only allowed in a rule with a **single class selector** to indicate custom pseudo classes for that class.
:::

### Boolean

To define a custom state that can be either **on or off**, provide state definitions with a single ident as the name for the state, then target the state using a pseudo-class.

<!-- prettier-ignore-start -->
```css
.x {
  /* define 2 boolean states on 'x' */
  -st-states: toggled, loading;
}

/* target single custom state */
.x:toggled {}

/* target multiple custom states */
.x:toggled:loading {}
```
<!-- prettier-ignore-end -->

### Enum

A custom state with a **restricted option list** that can target one of the options using a pseudo-class selector with a matching parameter and an **optional default value**.

<!-- prettier-ignore-start -->
```css
.x {
  /* define a 'size' custom state with 3 options 
     and a 'color' state with options and a default 'green' value */
  -st-states: size(enum(small, medium, large)),
              color(enum(reg, green, blue)) green;
}

/* target an element with a size of `medium` */
.x:size(medium) {}

/* INVALID! - 'huge' is not a possible value for size */
.x:size(huge) {}

/* INVALID! - parameter is required for size */
.x:size {}

/* VALID! - same as ':color(green)' */
.x:color {}
```
<!-- prettier-ignore-end -->

### String

A custom state that can accept a `string parameter` value.

<!-- prettier-ignore-start -->
```css
.x {
  /* define 'category' custom state that accepts a string parameter */
  -st-states: category(string);
}

/* target an element with state category='kitchen' */
.x:category(kitchen) {}

/* target an element with state category='office' */
.x:category(office) {}
```
<!-- prettier-ignore-end -->

#### Optional string validation

There are several options that can be used to validate the potential string parameter input:

- **minLength** - validates min length of input
- **maxLength** - validates max length of input
- **contains** - validates substring value exist in input
- **regex** - validates input against a regular expression

To set validations on a string state type, call the string as a function and pass a list of validations.

<!-- prettier-ignore-start -->
```css title="string validation definition examples"
.a { 
  /* validates input has min/max length and has the string 'user' in it */
  -st-states: x(string(minLength(5), maxLength(10), contains('user')));
}

.b {
  /* validates input begins with 'user' */
  -st-states: x(string(regex('^user')));
}
```
<!-- prettier-ignore-end -->

### Number

A custom state that can accept a `number parameter` value.

<!-- prettier-ignore-start -->
```css
.a {
  /* define 'ranking' custom state that accepts a number parameter */
  -st-states: ranking(number);
}

/* target an element with a state rankin='5' */
.a:ranking(5) {}
```
<!-- prettier-ignore-end -->

#### Optional number validation

There are several options that can be used to validate the potential number parameter input:

- **min** - validates min size of input
- **max** - validates max size of input
- **multiplyOf** - validates input is multiply of a given value

<!-- prettier-ignore-start -->
```css title="number validation definition example"
.a {
  /* validates the targeting number argument */
  -st-states: x(number(min(2), max(6), multipleOf(2)));
}

/* valid arguments */
.a:x(2) {}
.a:x(4) {}
.a:x(6) {}

/* INVALID! - "multipleOf(2)" */
.a:x(3) {}
.a:x(5) {}

/* INVALID! - "min(2)" and "max(6)" */
.a:x(1) {}
.a:x(7) {}
```
<!-- prettier-ignore-end -->

## State inheritance

When using [-st-extends](./extend-stylesheet) to extend another stylesheet or class, states definitions are inherited, but can also be overridden at any level.

<!-- prettier-ignore-start -->
```css title="base.st.css"
.root {
  /* define states 'a' and 'b' for the root of base stylesheet */
  -st-states: a, b;
}
```

```css title="extend.st.css"
@st-import Base from './base.st.css';

.root {
  /* inherits states 'a' and 'b' */
  -st-extends: Base;

  /* define states 'c' and 'b' (override 'b' from 'Base') */
  -st-states: c, b;
}

.root:a {}
.root:b {}
.root:c {}

/* OUTPUT */
.extend__root.base--a {}   /* 'a' defined in base */
.extend__root.extend--b {} /* 'b' defined in base, but overridden in extend */
.extend__root.extend--c {} /* 'c' defined in extend */
```
<!-- prettier-ignore-end -->

:::note Native pseudo-class override
You can override the behavior of native pseudo-classes. This can enable you to write [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill) for forthcoming CSS pseudo-classes to ensure that when you define a name for a custom pseudo-class, if there are clashes with a new CSS pseudo-class in the future, your app's behavior does not change. We don't recommend you to override an existing CSS pseudo-class unless you want to drive your teammates insane.
:::

## Runtime

To activate a custom state, use the [cssStates](./runtime#custom-state-mapping) or [st() function](./runtime#st-function) to generate the active `CSS classes` states.

<!-- prettier-ignore-start -->
```js
import { st, classes } from './sheet.st.css'; 

// active states
st(classes.part, {
  isOn: true,      // boolean
  size: 'small'    // string or enum
  place: 1         // number state
});

// un-active states - only 'part' class
st(classes.part, {
  isFirst: false,  // boolean
  size: undefined  // string or enum
  place: undefined // number
});
```
<!-- prettier-ignore-end -->

## Namespace

Stylable generates namespaced CSS classes for custom states:

<!-- prettier-ignore-start -->
```css
.x:bool {}
.x:enum(option1) {}
.x:string(word) {}
.x:number(55) {}

/* OUTPUT */
.NAMESPACE__x.NAMESPACE--bool {}
.NAMESPACE__x.NAMESPACE---enum-7-option1 {}
.NAMESPACE__x.NAMESPACE---string-4-word {}
.NAMESPACE__x.NAMESPACE---number-2-55 {}
```
<!-- prettier-ignore-end -->

### Map to selector

In some cases the default way Stylable transforms a state into a class is not the desired behavior, for example when writing style interface to an external view that might mark state as an attribute, For this `mapped state` can be used to transform the state into a another selector.

To define a global mapped state, pass a selector as a string instead of a type:

<!-- prettier-ignore-start -->
```css
.x {
  -st-states: toggled('.on'), 
              loading('[dataSpinner]');
}

.x:toggled {}
.x:loading {}

/* OUTPUT */
.NAMESPACE__x.on {}
.NAMESPACE__x[dataSpinner] {}
```
<!-- prettier-ignore-end -->

Additionally a single parameter can be defined after the selector string and referenced in the selector string using `$0`:

<!-- prettier-ignore-start -->
```css
.x {
  -st-states: size('[size="$0"]', enum(small, medium, large));
}

.x:size(small) {}

/* OUTPUT */
.NAMESPACE__x[size='small'] {}
```
<!-- prettier-ignore-end -->
