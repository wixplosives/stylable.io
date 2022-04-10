---
id: typescript-integration
title: TypeScript Integration
---

Stylable requires `*.st.css` stylesheets to be imported into your `*.ts/*.tsx` files for class names, states, variables, or keyframes to be applied to your components.

By default, TypeScript has no way of knowing what’s inside a `*.st.css` file, so you must define a type for it. 
Fortunately, Stylable can generate a declaration file for each stylesheet. These files were generated using our [`@stylable/cli`](https://github.com/wix/stylable/tree/master/packages/cli) or by using it inside the integrations.

Using `create-stylable-app` will generate the `.d.ts` files when running:
```sh
npm start
```
or when building the project:
```sh
npm run build
```

---


:::note 
All the examples are written below using the "inline" syntax of `stc`. Alternatively, you can use the "stylable.config.js" file. ([example](https://github.com/wix/stylable/tree/master/packages/cli#configuration-file)) 
:::

## Publishing

If you publish any `*.st.css` files in your package, you should also publish the `.d.ts` and `.d.ts.map` files alongside them. This practice leads to a better experience for users consuming your project.

```sh
stc --outDir="dist" --stcss --dts --dtsSourceMap
```

## Generating stylesheet definition files manually

Stylable provides the ability to generate type definition files (`.d.ts`) for any stylesheet. These serve as static typings for each export that the stylesheet provides:

- `class`/`var`/`stVar`/`keyframe` - exposes available symbols defined within the stylesheet.
- `st`/`style`/`cssStates` - exposes stylesheet utility functions typed according to states defined within stylesheet.


Generate a `.d.ts` next to the `*.st.css` file:

```sh
stc --dts
```

Alternatively, you can generate the `.d.ts` files in a custom folder, for example, `st-types` like this:

```sh
stc --srcDir="src" --outDir="st-types" --dts
```

and then inside your `tsconfig.json` you will have to specify two `rootDirs` (Read more about this in the [`tsconfig.json` documentation](https://www.typescriptlang.org/tsconfig#rootDirs)):

```jsonc
{
  "compilerOptions": {
    "rootDirs": ["./src", "./st-types"]
  }
}
```

### Import third party stylesheet that does not provide `.d.ts` files

You will have to [declare global typings](#declaring-global-stylesheet-typings), but to keep it type safe you should update the request to match the module's stylesheets only.

For example:
```ts
/**
 * globals.d.ts:
 */
declare module "my-module/*.st.css" {
  //...
}
```



### Generating source-maps

In addition to generating `.d.ts` files, you can also generate source-maps (`.d.ts.map`).

These source-maps will map the content of the `.d.ts` file back to the source stylesheet (`.st.css`) so that you can jump to definitions in your stylesheets straight from your TypeScript files.

```sh
stc --dts --dtsSourceMap
```

### Development mode

To have a good experience when working locally in dev mode, we recommend generating both the definition files and their source-maps using our `watch` service.

This ensures that as you are working your code, validations, completions and other language-service capabilities will remain up-to-date.

```sh
stc --dts --dtsSourceMap -w --cjs false
```

:::tip
Generating both definition and source-map files for every stylesheet in a project can clutter the project up. For this reason, we recommend adding the generated `*.st.css.d.ts` and `*.st.css.d.ts.map` files to your `.gitignore` file, and only include them in your published packages.
:::


### ESlint Stylable plugin vs. generated definition files

There is an overlap of functionality between the Stylable ESlint plugin and the generated `.d.ts` files - both solutions validate stylesheet export usages. The `.d.ts` file approach is superior, howevever, as it offers better validations, completions and correctness. All it requires is that the `watch` service be running.

In conclusion, if you are generating definition files, you can remove the ESlint Stylable plugin and suffer no degredation in development experience.

## Declaring global stylesheet typings

The first type definition you should include in your project is a general purpose `*.st.css` global declaration. This provides a broad signature of a Stylable stylesheet.

To do this, create a `globals.d.ts` file in your `./src` directory and add the following declaration:

```ts
/**
 * globals.d.ts:
 */
declare module "*.st.css" {
  export * from "@stylable/runtime/stylesheet";

  const defaultExport: unknown;
  export default defaultExport;
}
```
