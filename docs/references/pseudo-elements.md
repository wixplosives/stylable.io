---
id: pseudo-elements
title: Pseudo-Element
---

In addition to CSS's native [pseudo-elements](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements), **Stylable** stylesheets automatically expose CSS classes as custom pseudo-elements. This enables you to access internal parts of a component to apply styling.

## Define a custom pseudo-element

Any [CSS class](./class-selectors.md) is accessible as a pseudo-element of an [extending stylesheet](./extend-stylesheet.md).

When you define a CSS class inside a component, in this case a `playButton` in a `VideoPlayer`, that class may be targeted as a pseudo-element of any class that extends the component `videoPlayer`.

<!-- prettier-ignore-start -->
```css title="video-player.st.css"
.root {}
.playButton {
  background: black;
  color: white;
}
```
<!-- prettier-ignore-end -->

## Style a custom pseudo-element

Use `::` to access an internal part of a component after a [custom element type selector](./tag-selectors.md#component-element) or after an [extended class selector](./extend-stylesheet.md).

In this example, you [import](./imports.md) a `VideoPlayer` component into your stylesheet, and style an internal part called `playButton` overriding its original styling.

<!-- prettier-ignore-start -->
```css title="page.st.css"
@st-import VideoPlayer from "./video-player.st.css";
.mainVideo {
  -st-extends: VideoPlayer; /* define mainVideo as VideoPlayer */
}
.mainVideo::playbutton {
  /* override mainVideo playButton */
  background: green;
  color: purple;
}

/* OUTPUT */
.page__mainVideo.videoPlayer__root {}
.page__mainVideo.videoPlayer__root .videoPlayer__playButton {
  background: green;
  color: purple;
}
```
<!-- prettier-ignore-end -->

:::note

Custom pseudo-elements are not limited to the end of a selector like native pseudo-elements, and they can be chained. For example, you can access the label of a navigation button from a gallery: `.myGallery::navBtn::label`.

:::

## Extend a stylesheet's pseudo-element

When a Stylable stylesheet [root](./root.md) extends another stylesheet, pseudo-elements are automatically exposed on the extending stylesheet and available inline.

In this example, the class `playButton` is available from the original component file `video-player.css`, and extended and styled in the `super-video-player.css` stylesheet as a custom pseudo-element on the `root` class.

The `page.css` stylesheet can then extend `super-video-player.css` and on the `.mainPlayer` class, style `playButton` differently.

<!-- prettier-ignore-start -->
```css title="super-video-player.st.css"
@st-import VideoPlayer from "./video-player.st.css";
.root {
  -st-extends: VideoPlayer;
}
.root::playbutton {
  color: gold;
}

/* OUTPUT */
.superVideoPlayer__root.videoPlayer__root {}
.superVideoPlayer__root.videoPlayer__root .videoPlayer__playButton {
  color: gold;
}
```

```css title="page.st.css"
@st-import SuperVideoPlayer from "./super-video-player.st.css";
.mainPlayer {
  -st-extends: SuperVideoPlayer;
}
.mainPlayer::playbutton {
  color: silver;
}

/* OUTPUT */
.page__mainPlayer.superVideoPlayer__root {}
.page__mainPlayer.superVideoPlayer__root .videoPlayer__playButton {
  color: silver;
}
```
<!-- prettier-ignore-end -->

## Override a custom pseudo-element

You can use CSS classes to override extended pseudo-elements.

:::caution

You can also override native pseudo-elements using **Stylable's** custom pseudo-elements but this is not recommended as it can lead to code that's confusing and hard to maintain.

:::

In this example, `root` extends `VideoPlayer` and so any class placed on the `root` overrides the pseudo-element.

<!-- prettier-ignore-start -->
```css title="super-video-player.st.css"
@st-import VideoPlayer from "./video-player.st.css";
.root {
  -st-extends: VideoPlayer;
}
.playButton {
  /* override VideoPlayer playButton */
  color: gold;
}
.root::playbutton {
  color: grey;
}

/* OUTPUT */
.superVideoPlayer__root.videoPlayer__root {}
.superVideoPlayer__playButton {
  color: gold;
}
.superVideoPlayer__root.videoPlayer__root .videoPlayer__playButton {
  color: grey;
}
```
<!-- prettier-ignore-end -->

:::note

Overriding pseudo-elements changes the targeting in the overriding stylesheet and not in the stylesheet being extended.

:::
