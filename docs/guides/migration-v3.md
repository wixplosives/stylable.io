---
id: migration-v3
title: Stylable v3
---

This guide is intended to help migrate Stylable version 1 to Stylable version 2 or 3.
It is mainly geared towards Stylable integration in React projects.

# Suggested steps of migration

Follow these steps for a smooth transition. Each step is explained in
more detail below.

1. Update dependencies
1. Update global typings
1. Update `.st.css` file imports
1. Update usage in React components
1. Update tests

## Update dependencies

Ensure you have v3 Stylable dependencies available. You may need to
update your `package.json` or ensure that other dependencies bring you
v3 Stylable:

- `@stylable/cli`
- `@stylable/core`
- `@stylable/runtime`
- `@stylable/node`
- `@stylable/webpack-plugin`

:::tip

all Stylable packages in v3 are scoped under the `@stylable` namespace.
if you have dependencies like `stylable` (without scope), it is the old one and should be changed to scoped version.

:::

# Update global typings

If TypeScript is used in the project, we recommend updating the global typings
(usually `globals.d.ts`) with an `.st.css` module declaration:

```ts
declare module '*.st.css' {
  const stylesheet: import('@stylable/runtime').RuntimeStylesheet;
  export = stylesheet;
}
```

This way the TypeScript compiler will help refactor most of the
required changes and provide typings for other Stylable use cases.

## Update `.st.css` file imports

Prior to v2 all `.st.css` files would export a default `style` function. In v2
this has changed: `.st.css` files now export a named object.

List of all exported keys:

```js
import {
  st, // alias to `style`
  classes,
  cssStates,
  keyframes,
  namespace,
  stVars,
  style,
  vars,
} from './style.st.css';
```

This means that all imports of `.st.css` files have to be changed, for example:

```diff
-import style from './Component.st.css';
+import { st, classes, /* ... */ } from './Component.st.css';
```

However, most often `{ st, classes }` is enough:

`import { st, classes } from './Component.st.css';`

:::tip

`.st.css` files export a `style` function and an alias to it -
`st`. It is recommended to use `st` in order to avoid name clashing
with other variables (for example, some other inline style).

:::

### CSS custom properties

Stylable now localizes CSS Custom Properties. This means that any usage of Custom Proprties (e.g. `--prop`) should now be incorparated in the component code.

See the docs about [CSS custom properties](https://stylable.io/docs/references/css-vars) for usage examples.

## Update usage in React components

Once `.st.css` imports are updated, React components should be updated too:

```diff
-<div {...style('root', states, props)} />
+<div className={st(classes.root, states, props.className)} />
```

There are subtle but very important nuances in this change.

1. Stylable v1 used spread pattern. It would take the output of `style('root', states, this.props)` function and spread it on component.

   This way one or more props would be applied to the component. Thus, code that looks like this:

<!-- prettier-ignore-start -->
   ```jsx
   <div
     {...style(
       "root",
       {},
       { className: "additional-class", "data-hook": "test" }
     )}
   />
   ```
<!-- prettier-ignore-end -->

once evaluated, would behave like this:

```jsx
<div className="root additional-class" data-hook="test" />
```

Stylable v2 and v3 usage is like so:

```js
className={st(classes.root, states, this.props.className)}
```

There is no props spreading anymore and Stylable requires only
`className` to be used.

However, if you were relying on the props spread pattern, in v2 and v3 you
might find some props missing.

Therefore, with Stylable v3 it is up to you to apply any additional props:

<!-- prettier-ignore-start -->
   ```jsx
   <div
     className={st(classes.root, states, "additional-class")}
     data-hook="test"
     hello="world"
   />
   ```
<!-- prettier-ignore-end -->

2. Stylable v1 `style()` would accept unscoped css class name as a string  
   This is no longer acceptable in Stylable v2 or v3, for example:

   ```diff
   -<div {...style('root', state, { className: 'additional-class-name' })} />
   +<div className={style(classes.root, 'additional-class-name')} />
   ```

   note that `classes.root` comes from `.st.css`, which is the correct
   way to import class names.

   Similar scoping is applied to css variables too, imported from `vars`

Note: find more details and examples in our [Runtime reference](../references/runtime).

## Update tests

If you were using `@stylable/dom-test-kit` in Stylable v1, it's usage is
slightly different in v2 and v3:

```diff
import { StylableDOMUtil } from '@Stylable/dom-test-kit';
-import style from './Component.st.css';
+import * as styleSheet from './Component.st.css';

-const StylableDOMUtil = new StylableDOMUtil(style);
+const StylableDOMUtil = new StylableDOMUtil(styleSheet);
```

Stylable v2 and v3 `StylableDOMUtil` expects to receive an argument which is the whole stylesheet exported from a `.st.css` file

Prior to v2 it was only one thing - the `style` function.
