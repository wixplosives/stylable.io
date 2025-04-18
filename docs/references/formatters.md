---
id: formatters
title: Formatters
---

Formatters are functions that return a single CSS declaration value. They can receive arguments, process them and return the value.

:::note

Currently, any argument passed through to a formatter is of type `string`. We are in the process of adding support for more complex types.

:::

For example a `calc-font-size` formatter can return a different value for the font size depending on the provided argument.

:::tip

If you need to return multiple declaration values, we recommend using **Stylable** [mixins](./mixins.md).

:::

```js
/* ./calc-font-size.js */
module.exports = function (baseSize, modifier) {
  switch (modifier) {
    case 'header':
      return `${Number(baseSize) * 2}px`;
    case 'aside':
      return `${Number(baseSize) * 0.75}px`;
    default:
      return baseSize + 'px';
  }
};
```

```css
@st-import calcFontSize from "./calc-font-size";

.header {
  font-size: calcFontSize(16, header);
}

.form {
  font-size: calcFontSize(16, body);
}
```

```css
/* CSS output */
.header {
  font-size: 32px;
}

.form {
  font-size: 16px;
}
```

```css
/* CSS output */
.header {
  font-size: 32px;
}

.form {
  font-size: 16px;
}
```

:::note

Currently you cannot use formatters inside a native URL function. As a suggested workaround, you can return a URL function from a formattter.

:::

## Formatters with variables

When the formatter is imported into the CSS, it can also be used with a [variable](./variables.md).

In this example the CSS imports the same formatter as the previous example, `calc-font-size`, but the variable `baseFontSize` is added to the calculation.

```css
@st-import calcFontSize from "./calc-font-size";

:vars {
  baseFontSize: 12;
}

.header {
  font-size: calcFontSize(value(baseFontSize), header);
}

.form {
  font-size: calcFontSize(value(baseFontSize), body);
}
```

```css
/* CSS output */
.header {
  font-size: 24px;
}
.form {
  font-size: 12px;
}
```

## Nested formatters

You can also nest formatters to provide functions that are modular, composable and reusable.

In this example the formatter `divBy2` is nested in the `round` formatter. Both are imported into the CSS file and the output value is calculated from both. The formatters expose to the CSS mathematical calculations that are used in the JavaScript functions.

```js
/* ./math.js */
module.export = {
  divBy2: function (num) {
    return Number(Number(num) / 2);
  },
  round: function (num) {
    return Math.round(Number(num));
  },
};
```

```css
@st-import [divBy2, round] from "./math";

:vars {
  baseSize: 17px;
}

.header {
  font-size: round(divBy2(value(baseSize))) px;
}
```

```css
/* CSS output */
.header {
  font-size: 9px;
}
```
