# FAQs

0. What were the inspirations for developing **Stylable**?

    - [BEM](http://getbem.com/)
    - [Typescript](http://www.typescriptlang.org/)

1. What’s **Stylable** based on?

    - [PostCSS](http://postcss.org/)

2. What can I use it with?

    - Anything - but at the moment we have [integrations](./react-integration.md) with React and Webpack, with more to come. Here's an example of [Vue.js and Stylable](https://github.com/wix-playground/stylable-vue-example) working together.

3. Who uses it?

    - We’re currently integrating it into the Wix back-office systems, to battle-test it and learn where the holes are. Then we’ll use it to power the 100+ million websites created and hosted on the Wix platform.

4. Stylable spits out a static CSS file, great. but there's a piece that updates Style States in runtime, right? What does Stylable costs in size, in that regard?

     - Minimal. Stylable runtime has 2 parts - the runtime mapping, the import value that you get when importing a `st.css` file and optional integration code. Runtime mapping is the map of local to global of the stuff you define in the stylesheet (`.myClass` = `.NS__myClass`). 
Our integration is what turns `className={style.local-string}` into the correct global class name. It also offers the ability to add states and copy `data-*` and 'className' attributes to root.

