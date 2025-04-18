---
id: st-scope
title: Scope
---

**Stylable** scope enables you to wrap several style-rules using a single directive.
The scoping directive receives any valid Stylable selector to use for its scoping.

Stylable scoping directive is similar in its behavior to CSS nesting, but can only be applied to a single level.

### Syntax

```css
/* entry.st.css */
@st-scope .root {
  input {
    color: purple;
  }
}
```

```css
/* output */
.entry__root input {
  color: purple;
}
```

### Theming with scope

There are many possible patterns that can be used to theme a site or application in CSS. Stylable scoping capability serves as syntax sugar to allow an easier theme implementation.

Below are several examples for how theming can be done.

#### Creating a theme

In this example, we're representing a dark theme as a stylesheet. Creating your overriding rules under that Stylesheet's symbol and apply it to the relevant part of your DOM.

In this theme implementation we are targeting three components and overriding their default look.

```css
/* dark-theme.st.css */
@st-import App, [Button, DropDown] from "./index.st.css";

@st-scope .root {
  App {
    border-color: darkgrey;
  }
  Button {
    background: darkgreen;
  }
  DropDown {
    background: darkgrey;
    color: beige;
  }
}
```

#### Extending a theme

In this example, we are extending our previously created dark theme, with a specific override for the Gallery component.

```css
@st-import Gallery from "./gallery.st.css";
@st-import DarkTheme from "./dark.st.css";

@st-scope DarkTheme {
  DropDown {
    color: yellow; /* overriding DarkTheme color, perserving background */
  }
  Gallery {
    background: darkgrey;
  }
}
```

#### Theming with mixins

In this file, we are creating pre-designed flavors that uses Stylable variables to determine their styling.

```css
/* flavors.st.css */
@st-import [Button, UserForm] from "./index.st.css";

:vars {
  background: white;
  text: black;
  bordercolor: green;
}

.button-flavor {
  -st-extends: Button;
  background: value(background);
  color: value(text);
}

.userForm-flavor {
  -st-extends: UserForm;
  background: value(background);
  color: value(text);
  border: 1px solid value(borderColor);
}
```

In this example, we use our existing flavors from above to customize our components look under the dark theme.

```css
@st-import [UserForm, Button] from "./index.st.css";
@st-import [button-flavor, userForm-flavor] from "./flavors.st.css";

@st-scope .root {
  Button {
    -st-mixin: button-flavor(background black, text white);
  }

  UserForm {
    -st-mixin: userForm-flavor(background black, text white, borderColor #f4f4f4);
  }
}
```
