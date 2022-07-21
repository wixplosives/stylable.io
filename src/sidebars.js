module.exports = {
  Discover: [
    "getting-started/intro",
    "getting-started/install-configure",
    // {
    //   type: "category",
    //   label: "Tooling",
    //   collapsed: false,
    //   items: [
    "getting-started/stylable-intelligence",
    //   ],
    // },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: [
        "getting-started/react-integration",
        "getting-started/typescript-integration",
        "getting-started/storybook-integration",
        "getting-started/nextjs-integration",
      ],
    },
  ],
  Guides: [
    {
      type: "category",
      label: "New Guide",
      collapsed: false,
      items: [
        "guides/walkthrough/intro",
        "guides/walkthrough/class-walkthrough",
        "guides/walkthrough/namespacing-walkthrough",
        "guides/walkthrough/custom-state-walkthrough",
      ],
    },
    "guides/components-basics",
    "guides/component-best-practices",
    "guides/stylable-application",
    "guides/stylable-component-library",
    "guides/project-commons",
    "guides/shared-classes",
    "guides/component-variants",
    "guides/ssr",
    {
      type: "category",
      label: "Migrations",
      collapsed: true,
      items: ["guides/migration-v3", "guides/migration-v5"],
    },
  ],
  "Specification Reference": [
    "references/cheatsheet",
    {
      type: "category",
      label: "CSS",
      // link: {
      //   type: "generated-index",
      // },
      collapsed: false,
      items: [
        "references/class-selectors",
        "references/tag-selectors",
        "references/pseudo-classes",
        "references/pseudo-elements",
        "references/css-vars",
        "references/keyframes",
        "references/layer",
        "references/using-external-assets",
      ],
    },
    {
      type: "category",
      label: "Stylable",
      // link: {
      //   type: "generated-index",
      // },
      collapsed: true,
      items: [
        "references/imports",
        "references/root",
        "references/extend-stylesheet",
        "references/global-selectors",
        "references/custom-selectors",
        "references/st-scope",
        "references/namespace",
      ],
    },
    {
      type: "category",
      label: "Templating",
      // link: {
      //   type: "generated-index",
      // },
      collapsed: true,
      items: [
        "references/st-variables",
        "references/mixins",
        "references/formatters",
      ],
    },
    "references/runtime",
  ],
};
