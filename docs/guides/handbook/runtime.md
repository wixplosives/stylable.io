---
id: runtime
title: Runtime
---

In the [previous chapter](./state.md), we saw brief examples of mapping our `classes` local names to their global namespaced names at runtime, as well as the `cssStates` utility function to activate their states.

In this chapter, we'll explore the runtime features of Stylable and their usage.

One of the core ideas behind Stylable is to try and shift as much of the work as possible from runtime to build time to increase performence and end-user experience. However, in some instances, we need to do additional work in JavaScript.

For example, we need to:

- Bind classes to views
- Activate dynamic states
- Set dynamic values

## Mapped symbols

The namespacing chapter covered the basics of namespacing in Stylable, and in it we saw that in Stylable, **classes, custom-properties, keyframes, and layers** all receive namespacing to avoid conflicts.

### Import example

<!-- prettier-ignore-start -->
```js
import {
  classes,   // class mapping
  vars,      // custom properties mapping
  keyframes, // keyframes mapping
  layers,    // layer mapping
} from "game.st.css";

```

### Runtime namespaced names
| Import          | Type            | Source             | Target                 |
| --------------- | --------------- | ------------------ | ---------------------- |
| `classes`       | Class           | `.player`          | `.NS__player`          |
| `vars`          | Custom property | `--player1Color`   | `--NS-player1Color`    |
| `keyframes`     | Keyframes       | `@keyframes slide` | `@keyframes NS__slide` |
| `layers`        | Layer           | `@layer theme`     | `@layer NS__theme`     |

<!-- prettier-ignore-end -->

## Apply class and state

Up to this point, all use cases we saw for wiring elements were simplified or overly verbose.

For example, in the following example we can see that we are binding the `player` class to the `player` view, as well as activating the `registered` state.

<!-- prettier-ignore-start -->
```jsx
import { classes, stStates } from "game.st.css";

<div> 
    className={classes.player + ' ' + stStates({registered: true})}
</div>
```
<!-- prettier-ignore-end -->

### `st()` function

We can use the `st()` function to simplify this process, by passing it the class name as its **first argument**, and the activated states as its **second argument**.

```jsx
import { st, classes } from "game.st.css";

<div className={st(classes.player, { registered: true })}></div>;
```

There are cases in which we would like to add additional classes to an element. For example, a component might want to accept an external class name to allow for custom styling.

Below, we can see such a case, where we bind a class (`player`), activate a state (`registered`), and add an external class from props for customization purposes.

<!-- TODO: highlight line 5 once we sort how it looks -->

```jsx
import { st, classes } from "game.st.css";
const Game = ({ className }) => (
    ...
    <div className={
        st(classes.player, { registered: true }, className)
    }></div>
);
```

For further details on the runtime API, [see the runtime reference](../../references/runtime.md).

## Stylable build variables

We have yet to cover Stylable build variables, but seeing as they too expose part of their functionality to runtime, we'll cover them here briefly.

As opposed to the native runtime symbols we saw namespaced above, Stylable build variables do not require namespacing, as they are transpiled away at build time. In this case, the runtime export maps variables to their defined values.

<!-- prettier-ignore-start -->
```js
import {
  stVars // Stylable build variables
} from "game.st.css";

// runtime namespaced names
stVars.boardBackgroundColor; // "green"
```
<!-- prettier-ignore-end -->
