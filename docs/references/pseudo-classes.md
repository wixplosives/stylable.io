---
id: pseudo-classes
title: Pseudo-Class
---

In addition to CSS's native [pseudo-classes](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes), like `:hover` and `:nth-child()`, **Stylable** enables you to define custom pseudo-classes so that you can apply styles to your components based on state.

Let's say you want a component to have different styling applied to it when its content is loading. You can define `loading` as a custom pseudo-class and toggle it in your component.

## Define a custom pseudo-class

To define custom pseudo-classes, you use the **Stylable** directive rule `-st-states` to provide a list of the possible custom pseudo-classes that you want to use in the CSS.

The `-st-states` directive rule can be defined only for simple selectors like [class selector](./class-selectors.md) and [root](./root.md).

## Boolean

To define custom pseudo-classes, or states, without parameters, you tell **Stylable** the list of possible custom states that the CSS declaration may be given. You can then target the states in the context of the selector. In this example `toggled` and `loading` are added to the `root` selector and then targeted with different colors.

```css
/* example1.st.css */
@namespace "Example1";
.root {
  -st-states: toggled, loading;
}
.root:toggled {
  color: red;
}
.root:loading {
  color: green;
}
.root:loading:toggled {
  color: blue;
}
```

```css
/* CSS output */
.Example1__root.Example1--toggled {
  color: red;
}
.Example1__root.Example1--loading {
  color: green;
}
.Example1__root.Example1--loading.Example1--toggled {
  color: blue;
}
```

## With Parameter

When defining a custom pseudo-class with a parameter:

- You must provide a type definition.
- Optionally you can provide validation arguments to the type defined
- Optionally you can provide each state definition with a `default value`, enabling it to be used without providing a parameter argument.

```css
.root {
  -st-states: stateX([type]) [default Value?], stateY([type]) [default Value?];
}

.root:statex(arg) {
}

.root:statex {
  /* parameter resolves to "default Value", 
    if no default value was provided,
    this will fail validation */
}
```

:::tip

When defining a `default value`, you can use [variables](./variables.md) and [formatters](./formatters.md).

:::

### Enum

You can define a custom state with possible **enum value** options, and then target one of the options using a pseudo-class selector with a matching **string argument**.

```css
.root {
  /* define the custom state "size" */
  -st-states: size(enum(small, medium, large));
}

.root:size(medium) {
  /* target an element with a state value of "medium" */
}

.root:size(huge) {
  /* invalid because "huge" is not a one of the possible 
   values defined for the state "size" */
}
```

Setting the state's **enum value** in the view `<span className={style(classes.root, {size: "medium"})}>` resolves to `<span className="style--size-medium" />`.

### String

You can define a custom state with a **string value**, and then target it using a pseudo-class selector with a matching **string argument**.

```css
.root {
  /* define the "selected" custom state with a string parameter type */
  -st-states: selected(string);
}

.root:selected(username) {
  /* target an element with a state value that 
    is exactly the string argument "username" */
}
```

Setting the state **string value** in the view `<span className={style(classes.root, {selected: "username"})}>` resolves to `<span className="style--selected-username" />`.

#### String validation [optional]

You can optionally pass a regular expression string as an argument to add validation for the pseudo-class selector **string argument**. The regular expression must be within quotes.

You can optionally pass a regular expression function (`regex()`) to the string type to add regular expression validation for the pseudo-class selector.
This function accepts a single expression to be tested against the selector parameter. The expression must be within quotes.

```css
.root {
  /* validates that the targeting string argument begins with "user" */
  -st-states: selected(string(regex("^user")));
}

/* a valid argument */
.root:selected(username) {
}

/* invalid because it doesn't match the regular expression "^user" */
.root:selected(index) {
}
```

String type can also accept several other validations, including `minLength(number)`, `maxLength(number)` and `contains(string)`.

```css
.root {
  /* validates the targeting string arguments with multiple validations */
  -st-states: selected(string(minLength(2), maxLength(10), contains(user)));
}

/* valid argument */
.root:selected(username) {
}

/* invalid due to minLength(2) & contains(user) */
.root:selected(x) {
}
```

### Number

You can define a custom state with a **number value**, and then target it using a pseudo-class selector with a matching **number argument**.

```html
<span data-column="5" />
```

```css
.root {
  /* define the custom pseudo-class "column" */
  -st-states: column(number);
}

.root:column(5) {
  /* target an element with a state value that is exactly the number argument "5" */
}
```

Setting the state **number value** in the view `<span className={style(classes.root, {column: 5})}>` resolves to `<span className="style---column-1-5" />`.

#### Number validation [optional]

You can use several validators that the number type provides.

```css
.root {
  /* validates the targeting number argument */
  -st-states: column(number(min(2), max(6), multipleOf(2)));
}

/* valid arguments */
.root:column(2),
.root:column(4),
.root:column(6) {
}

/* invalid because not a "multipleOf(2)" */
.root:column(3),
.root:column(5) {
}

/* invalid because of "min(2)" and "max(6)" validations */
.root:column(1),
.root:column(7) {
}
```

## Mapped

**Stylable** generates custom pseudo-classes using `className` attributes. When you are building your components with **Stylable** the standard DOM implementation is handy, but you might want to target the state in a custom way.

You can use this feature to define custom pseudo-classes even if the existing components you are targeting are not based on **Stylable**.

In this example, `toggled` and `loading` are defined on the root class with their custom implementation.

```css
/* example-custom.st.css */
@namespace "ExampleCustom";
.root {
  -st-states: toggled(".on"), loading("[dataSpinner]");
}
.root:toggled {
  color: red;
}
.root:loading {
  color: green;
}
```

```css
/* CSS output */
.ExampleCustom__root.on {
  color: red;
}
.ExampleCustom__root[dataSpinner] {
  color: green;
}
```

:::note

When writing custom mapping, ensure your custom selector targets a simple selector, and not a CSS complex selector.

:::

## State inheritance

You can extend another imported stylesheet and inherit its custom pseudo-classes. In this example the value `Comp1` is imported from the `example1.css` stylesheet and extended by `.mediaButton`. The custom pseudo-classes `toggled` and `selected` are defined to be used on the `mediaButton` component.

```css
/* example2.st.css */
@namespace "Example2";
@st-import Comp1 from "./example1.st.css";
.mediaButton {
  -st-extends: Comp1;
  -st-states: toggled, selected;
}
.mediaButton:hover {
  border: 0.2em solid black;
} /* native CSS because no custom declaration*/
.mediaButton:loading {
  color: silver;
} /* from Example1 */
.mediaButton:selected {
  color: salmon;
} /* from Example2 */
.mediaButton:toggled {
  color: gold;
} /* included in Example1 but overridden by Example2 */
```

```css
/* CSS output */
.Example1__root.Example1--toggled {
  color: red;
}
.Example1__root.Example1--loading {
  color: green;
}
.Example2__mediaButton:hover {
  border: 0.2em solid black;
} /* native hover - not declared */
.Example2__mediaButton.Example1--loading {
  color: silver;
} /* loading scoped to Example1 - only one to declare */
.Example2__mediaButton.Example2--selected {
  color: salmon;
} /* selected scoped to Example2 - only one to declare */
.Example2__mediaButton.Example2--toggled {
  color: gold;
} /* toggled scoped to Example2 - last to declare */
```

:::note

You can override the behavior of native pseudo-classes. This can enable you to write [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill) for forthcoming CSS pseudo-classes to ensure that when you define a name for a custom pseudo-class, if there are clashes with a new CSS pseudo-class in the future, your app's behavior does not change. We don't recommend you to override an existing CSS pseudo-class unless you want to drive your teammates insane.

:::

## Runtime control

Custom pseudo-classes are implemented using `className` attributes and need additional runtime logic to control when they are on and off.

**Stylable** offers a [runtime API](./runtime.md#st-function) to help components manage custom pseudo-classes easily.

```jsx
/* sample of a stylable component */
import { style, classes } from "./stylesheet.st.css";

class MyComponent {
  render() {
    return (
      <div
        className={style(
          classes.root,
          {
            toggled: true,
            selected: false,
          },
          this.props.className
        )}
      ></div>
    );
  }
}
```
