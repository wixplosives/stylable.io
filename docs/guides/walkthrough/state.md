---
id: custom-state-walkthrough
title: Custom State
---

In CSS we have the ability to target native states of various elements, using the [`pseudo-class`](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) syntax, for example `:hover` or `:active`.

While this is very handy, as of today CSS does not provide a set way for us to define a custom state. For example, we might want a `winner` custom state for a player that has won our game.

We could choose to implement such a state manually, by using a class selector (e.g. using a [BEM modifier](http://getbem.com/naming/#modifier:~:text=block__elem%20%7B%20color%3A%20%23042%3B%20%7D-,Modifier,-Flags%20on%20blocks): `.NS--winner`) or an attribute selector (e.g. `[data-NS-winner]`).

This is a bit of a pain for several reasons, unlike native pseudo-classes, a class or an attribute selector is not semantic, and so we lose the original intent. If a convention like BEM is used, then the semantics are conserved, but it increases the verbosity of our code.

By defining our states through Stylable, we gain the benefit of validations, completions and a consistent syntax for states.

## Define and target

To define a winner state for our `player` class, we will use the `-st-states` declaration, and pass it a single state name of `winner`.

We can then target this state using our newly defined `:winner` pseudo-class, knowing it will be transformed to a valid, safe selector at build time.

<!-- prettier-ignore-start -->
```css
.player {
  -st-states: winner; /* definition */
}
.player:winner {}     /* usage */

/* OUTPUT */
.NS__player {}
.NS__player.NS--winner {}
```
<!-- prettier-ignore-end -->

In the example above, the winner state is a boolean definition that can either be targeted, or not. But, let's imagine that instead of a single winner, we now want to highlight first, second, and third ranking players.

We can define such a state, by passing the `enum` parameter type to the `ranking` state definition, and in it list our possible options.

<!-- prettier-ignore-start -->
```css
.player {
  -st-states: ranking(enum(first, second, third)); 
}

.player:ranking(first)   {}    
.player:ranking(second)  {}    
.player:ranking(third)   {}     
```
<!-- prettier-ignore-end -->

There are additional parameter types, as well as validators, default values and mapping capabilities to Stylable custom states, [read more here](../../references/pseudo-classes.md)

:::caution Conflicts with native
At this point, you may have noticed that we can define states that would conflict with native CSS ones. For example, we can define a "custom" state called `:hover` that would conflict with the native `:hover` pseudo-class.

<!-- prettier-ignore-start -->
```css
.okButton {
  -st-states: hover;
}
.okButton:hover {} /* custom state, not the native one */
```
<!-- prettier-ignore-end -->

Due to this potentially confusing behavior, we strongly recommend against naming states that would conflict with native ones.
:::

## Runtime toggle

Now that we have defined our states, we would want to be able to toggle them at runtime in our component.

```js
import { cssStates } from "./game.st.css";

// create a boolean class for the "winner" state
const isWinnerClass = cssStates({ winner: true });

// create an enum variant class for the "first" ranking player
const isFirstPlaceClass = cssStates({ ranking: "first" });
```

Looking at the example above, we import the `cssStates` function from our `game.st.css` stylesheet, and then use it to generate two class names to represent those active states.

In the next chapter, we will explore Stylable's runtime feature set and see additional ways of working with states at runtime.
