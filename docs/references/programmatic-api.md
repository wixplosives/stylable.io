---
id: programmatic-api
title: Programmatic API
---

## Stylable instance

Stylable is usually consumed through one of its available integration, for more specific or advanced use-cases, the programmatic API can be used for greater control on how Stylable operates.

:::note
The APIs described here are treated as stable, and available for use. Any other API exposed by Stylable not described here may changed, and should not be dependant on.
:::

The `Stylable` class provided from `@stylable/core` requires configuration to initialize.

Example:

<!-- prettier-ignore-start -->

```js title="Initialize Stylable instance"
import fs from 'node:fs';
import { Stylable } from '@stylable/core';

// minimal required configuration
Stylable({ fs, projectRoot: __dirname });
```

<!-- prettier-ignore-end -->

### Instance configuration

| Option             | Type                                    | Default Value                               | Description                       |
| ------------------ | --------------------------------------- | ------------------------------------------- | --------------------------------- |
| `fs`               | [`MinimalFS`](#minimalfs)               | `required`                                  | Filesystem instance to use        |
| `projectRoot`      | `string`                                | `required`                                  | The project root directory path   |
| `mode`             | `string`                                | `"production"`                              | Development or production mode    |
| `resolveNamespace` | [`ResolveNamespace`](#resolvenamespace) | default resolver depends on running context | Function to determine namespacing |

### `MinimalFS`

Stylable minimal required file system interface:

```ts title="MinimalFS interface"
interface MinimalFS {
  statSync: (filePath: string) => { mtime: Date };
  readFileSync: (filePath: string, encoding: 'utf8') => string;
  readlinkSync: (filePath: string) => string;
}
```

### `ResolveNamespace`

Provide exact control of the namespacing mechanism by providing a function that accepts:

- `namespace` - a stylesheet source namespace - determined by the `@st-namespace` if exists, and falls back to the filename
- `origin` - an origin path - path to the source stylesheet

This function will then return a string to be used as the "namespace" for stylesheet definitions.

#### Basic example

An example for a basic namespace resolver, that generates unique verbose namespaces based on the component namespace and origin path of the stylesheet.

```ts title="Resolve namespace example"
const resolveNamespace: ResolveNamespace = (namespace: string, origin: string): string {
    return namespace + hash(origin);
}
```

<!-- prettier-ignore-start -->

```css title="comp.st.css"
.root {}

/* OUTPUT */
.comp1169059893__root {}
```

<!-- prettier-ignore-end -->
