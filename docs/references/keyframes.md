---
id: keyframes
title: Keyframes
---

The `@keyframes` CSS at-rule is used to define an animation that can be referenced to animate a DOM element.

This page goes over how Stylable handles `@keyframes`, for more details about the language feature itself, checkout the following resources:
- [MDN @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [CSS animation spec](https://drafts.csswg.org/css-animations/#keyframes)

## Syntax

**Keyframes definition**
```css
/* empty definition */
@keyframes slide {}

/* animation definition */
@keyframes jump {
  from { color: red }
  to { color: green }
}

/* percentage keyframes */
@keyframes jump {
  0% { color: red }
  50% { color: green }
  100% { color: blue }
}
```

**Keyframes usage**
```css
.x {
  /* within animation shorthand */
  animation: slide 3s ease-out infinite;
}
.y {
  /* same as above */
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}
```

## Import and Export

An exported keyframes can be imported into another stylesheet with the [@st-import](./imports.md) atrule.

**Insert rules into imported layer**

```css
/* get 'slide' keyframes definition from another stylesheet */
@st-import [keyframes(slide)] from './x.st.css';

.x {
  /* use in animation */
  animation-name: slide;
}
```

**More import examples**
```css
/* map 'slide' keyframes to local name 'x-slide' */
@st-import [keyframes(slide as x-slide)] from './x.st.css';

/* import multiple keyframes */
@st-import [keyframes(slide, jump)] from './x.st.css';
```

## Runtime

A Keyframes definition can be accessed for dynamic styles using the keyframes mapping on the Stylable runtime stylesheet:

```js
import { keyframes } from "./sheet.st.css";

// map to target namespaced keyframes
keyframes.jump;
```

## Namespace

Stylable automatically namespaces any keyframes name according to the stylesheet it is defined in:

```css
@keyframes slide {}

.x {
  animation-name: slide;
}

/* OUTPUT */
@keyframes NAMESPACE__slide {}

.x {
  animation-name: NAMESPACE__slide;
}
```

### Disable namespace

In some cases the default namespace behavior is unwanted. In such cases, `st-global` can be used to mark a keyframes definition as global:

<!-- ToDo: accept missing body to define just the symbol without overriding previous keyframes: "@keyframes st-global(slide);" for the case of external global keyframes -->
```css
@keyframes st-global(slide) {}
.x {
  animation-name: slide;
}

/* OUTPUT */
@keyframes slide {}
.x {
  animation-name: slide; /* no namespace */
}
```
