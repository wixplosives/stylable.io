---
id: migration-v5
title: Migrating to Stylable v5
---

The purpose of this document is to help migrate projects using Stylable to `v5`.

We have taken the opportunity of node dropping LTS support for `v12` and we have decided to include a number of additional breaking changes to the `v5` release. These changes are primarily to the programmatic API of Stylable and not to user facing features, syntax or integrations.

You can find the plan for this major version [here](https://github.com/wix/stylable/issues/2410).

## Reducing public facing APIs

In the past, Stylable exposed all of its functionalities as public facing APIs. Over time, this has proven difficult to maintain and develop further, and so We have decided to limit what Stylable exposes, and to segment its APIs under a few different namespaces.

### Removed APIs

The following APIs have been removed, and an alternative was provided:

- custom pseudo state parameter type `tag` has been removed - can be replaced by `-st-states: stateName(string)` (see [issue](https://github.com/wix/stylable/issues/1552#issuecomment-874559161))
- the ability to pass `Stylable vars` as value to custom pseudo-state type has bee removed

### Missing APIs?

If we have removed an API that you have found useful, and provided no alternative, please let us know by opening an issue over at [GitHub](https://github.com/wix/stylable/issues/new/choose).
