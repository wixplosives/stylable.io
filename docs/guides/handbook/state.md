---
id: custom-state
title: Custom State
---

In CSS, we have the ability to target native states of various elements using the [`pseudo-class`](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) syntax (for instance, `:hover` or `:active`).

While this is very handy, as of today, CSS does not provide a set way for us to define a custom state. For example, we might want a `registered` custom state to represent a player element that has signed up for our game.

We could choose to implement such a state manually by using a class selector (e.g. using a [BEM modifier](http://getbem.com/naming/#modifier:~:text=block__elem%20%7B%20color%3A%20%23042%3B%20%7D-,Modifier,-Flags%20on%20blocks): `.NAMESPACE--registered`) or attribute selector (e.g. `[data-NAMESPACE-registered]`).

This is a bit of a pain for several reasons. Unlike native pseudo-classes, a class or an attribute selector is not semantic, and so we lose the original intent. If a convention like BEM is used, then the semantics are conserved, but it increases the verbosity of our code.

By defining our states through Stylable, we gain the benefit of validations, completions, and a consistent syntax for states.

## Define and target

To define a registered state for our `player` class, we will use the `-st-states` declaration, and pass it a single state name of `registered`.

We can then target this state using our newly-defined `:registered` pseudo-class, knowing it will be transformed to a valid, safe selector at build time.

<!-- prettier-ignore-start -->
```css
.player {
  -st-states: registered; /* definition */
}
.player:registered {}     /* usage */

/* OUTPUT */
.NAMESPACE__player {}
.NAMESPACE__player.NAMESPACE--registered {}
```
<!-- prettier-ignore-end -->

In the example above, we defined a `registered` boolean state that can either be targeted, or not. Let's imagine, though, that in addition to the `registered` state, we now want to highlight `first`, `second`, and `third` ranking players.

We can define such a state by passing the `enum` parameter type to the `ranking` state definition, and in it, list our possible options.

<!-- prettier-ignore-start -->
```css
.player {
  -st-states: registered, 
              ranking(enum(first, second, third)); 
}

.player:ranking(first)   {}    
.player:ranking(second)  {}    
.player:ranking(third)   {}     
```
<!-- prettier-ignore-end -->

There are additional parameter types, as well as validators, default values, and mapping capabilities to Stylable custom states. [Read more in the API reference](../../references/pseudo-classes.md)

:::caution Conflicts with native
At this point, you may have noticed that we can define states that would conflict with native CSS ones. For example, we can define a "custom" state called `:hover` that would conflict with the native `:hover` pseudo-class.

<!-- prettier-ignore-start -->
```css
.player {
  -st-states: hover;
}
.player:hover {} /* custom state, not the native one */
```
<!-- prettier-ignore-end -->

Due to this potentially confusing behavior, we **strongly recommend** against naming states that would conflict with native ones.
:::

## Runtime toggle

Now that we have defined our states, we want to be able to toggle them at runtime in our component.

<!-- prettier-ignore-start -->
```js
import { cssStates, classes } from "./game.st.css";

// create a registered first ranking player
<div className={
    classes.player + " " + cssStates({ 
      registered: true,
      ranking: "first" 
    })}>
</div>;
```
<!-- prettier-ignore-end -->

Looking at the example above, we import the `cssStates` function and the `classes` mapping from our `game.st.css` stylesheet. We then create a `div` element to represent a _registered_ and _first rank_ player.

This example, where we manually concatenate the class and states, is quite verbose and potentially confusing. In the next chapter, we will explore Stylable's runtime feature set and see a cleaner way of working with states at runtime.
