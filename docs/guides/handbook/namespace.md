---
id: namespacing
title: Namespacing
---

In the [Classes chapter](./class.mdx#resolve-global-conflicts), we briefly explained the concept of using namespacing to avoid conflicts between stylesheets.

In this chapter, we'll dive deeper to see how other symbols in CSS can be rendered safe to use, and how namespacing can be controlled.

## Supported symbols

We've only mentioned classes up to this point, but in CSS, there are many other symbols that share the same naming context, therefore requiring namespacing to avoid potential conflicts.

Symbols that Stylable namespaces:

| Symbol          | Source             | Target                        |
| --------------- | ------------------ | ----------------------------- |
| Class           | `.okButton`        | `.NAMESPACE__okButton`        |
| Custom property | `--bgColor`        | `--NAMESPACE-bgColor`         |
| Keyframes       | `@keyframes slide` | `@keyframes NAMESPACE__slide` |
| Layer           | `@layer theme`     | `@layer NAMESPACE__theme`     |
| Container       | `container: panel` | `container: NAMESPACE__panel` |

:::note
Stylable does not namespace `id`, `custom-element`, `attribute`, or other symbols at the moment, but may add additional symbol namespacing support in the future.
:::

## Global

In some cases, we might want to avoid namespacing for a specific symbol.

For example:

- To style a third-party component that is using pre-determined global class names.
- To expose a persistent, globally-namespaced API for non-Stylable consumers that are using our project.

### Disable in selector

To avoid namespacing on classes in a selector, wrap those classes with a `:global(...)` pseudo-class.

```css title="game.st.css"
.player:global(.highlight) {
  background: yellow;
}

/* OUTPUT */
.game__player.highlight {
  background: yellow;
}
```

:::caution
Classes used within the `:global(...)` pseudo-class are not treated as symbols in the stylesheet, and are not exported. This means that they are not available for use in other stylesheets or in the runtime JavaScript module.
:::

### Defining global symbols

We can avoid namespacing for all symbols (except classes) by using the `st-global()` function:

- `@property st-global(--bgColor)` - [read more](../../references/css-vars#disable-namespace)
- `@keyframes st-global(slide)` - [read more](../../references/keyframes#disable-namespace)
- `@layer st-global(theme)` - [read more](../../references/layer#disable-namespace)
- `container: st-global(panel)` - [read more](../../references/contains#disable-namespace)

Unlike the other symbols that are mapped from a local name to their global one, when we map a class using `-st-global`, we can define a global selector that will replace it.

```css
.player {
  -st-global: '.myGame__player';
}
```

Notice that in this case, we are mapping our `player` class to a `.myGame__player` class selector. This is because classes can be mapped to any selector, including multiple classes, elements, attributes, and other CSS selector parts.

<!-- TODO: expand on -st-global outcomes in the runtime api and link to it here -->

## Stylesheet level namespacing

By default, namespacing is derived in Stylable using the stylesheet filename, but in some edge cases we might want to override this behavior.

To do so, we can use the `@st-namespace 'OverrideNamespace';` definition. [Click here](../../references/namespace.md) to read more about the namespace API.

## Project level namespacing

On a more general level, we can have granular control of Stylable's namespacing process by passing a [custom namespace resolver](../../getting-started/stylable-config) to Stylable at initialization using configuration.

<!-- TODO: create stylable.config entry and link to it -->
