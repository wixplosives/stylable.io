---
id: migration-v5
title: Migrating to Stylable v5
---

The purpose of this document is to help migrate projects using Stylable to `v5`.

We have taken the opportunity of node dropping LTS support for `v12` and we have decided to include a number of additional breaking changes to the `v5` release. These changes are primarily to the programmatic API of Stylable and not to user facing features, syntax or integrations.

You can find the plan for this major version [here](https://github.com/wix/stylable/issues/2410).

## `@stylable/core`

### Diagnostics overhaul

All diagnostics in `@stylable/core` had diagnostics code added, and were reviewed for consistency. Many diagnostics have had their severity increased to `error`.

We plan on starting to map out the diagnostics in this site to help users understand what they are seeing, and why it happened.

### Reducing public facing APIs

In the past, Stylable exposed all of its functionalities as public facing APIs. Over time, this has proven difficult to maintain and develop further, and so we have decided to limit what Stylable exposes, and to segment its APIs under a few different namespaces.

In addition, most APIs have been refactored to match our new [programmatic API model](https://github.com/wix/stylable/wiki/Programmatic-API).

#### API changes

The following APIs have been changed:

- `StylableMeta` renamed `rawAst` to `sourceAst` and `outputAst` to `targetAst`
- The Stylable constructor now accepts options as an object (similar to `Stylable.create()` options)

The following APIs have been removed:

- The `Stylable.create()` method has been removed
- `StylableMeta` removed `ast` field
- `StylableTransformer` is no longer considered public API, there relevant functionality has been moved to `stylable.transform`, `stylable.transformSelector`, etc.
- custom pseudo state parameter type `tag` has been removed - can be replaced by `-st-states: stateName(string)` (see [issue](https://github.com/wix/stylable/issues/1552#issuecomment-874559161))

#### Missing APIs?

If we have removed an API that you have found useful, and provided no alternative, please let us know by opening an issue over at [GitHub](https://github.com/wix/stylable/issues/new/choose).

## `@stylable/cli`

### Default arguments changed

The `@stylable/cli` `stc` command now has no default output defined, previously this was set to emit `.cjs` files.

- If you were using the `stc` command without the `--cjs` flag, you will need to update your code to use the new default output
- If were explictly setting the output to not emit `.cjs` files (e.g. `--no-cjs` or `--cjs=false`), you can now remove this parameter from your command

### Build index file and other outputs simultaneously

The `@stylable/cli` `stc` command now supports building an indexFile and other outputs (`.js`, `.css`, `.st.css`, etc.) at once.

- If you were previously running separate commands to build the index file and other outputs, you can now run a single command to build them all at once
