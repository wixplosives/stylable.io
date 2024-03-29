---
id: stylable-intelligence
title: Stylable Intelligence
sidebar_label: VSCode Extension
---

**Stylable Intelligence** is an extension implementing the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) that provides IDE support for **Stylable**. It currently includes:

- Syntax highlighting
- Code completion
- Go to definition
- Diagnostics

## Installation

You can install **Stylable Intelligence** from the [Visual Studio Code market](https://marketplace.visualstudio.com/items?itemName=wix.stylable-intelligence):

- In Visual Studio Code, click the **Extensions** icon to open the market.
- In the search field, enter **Stylable Intelligence**.
- Install the extension and reload the window when prompted.

## IDE extensions

Because stylable-intelligence registers `.st.css` files as Stylable and not CSS, certain CSS extensions may not work until they explicitly add Stylable support. The stylable-intelligence extension for VSCode is compatible with the following CSS extensions:

1. [CssTriggers](https://github.com/kisstkondoros/csstriggers)(^0.4.0) - A VSCode extension that adds inline decoration to CSS properties to indicate their costs.

If you are using an extension that you would like to add to this list, let us know and we'd be happy to help.

## CSS functionality

Because Stylable files are not recognized as CSS, we proxy the CSS Language Server through stylable-intelligence. Most basic features are already supported, but if you notice anything strange, let us know.

:::note

Future plans include:

- More Language Server features.
- Support for JetBrains IDEs (WebStorm, IntelliJ). Currently supported only in VSCode.

:::
