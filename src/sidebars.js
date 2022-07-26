module.exports = {
    Discover: [
        'getting-started/intro',
        'getting-started/install-configure',
        // {
        //   type: "category",
        //   label: "Tooling",
        //   collapsed: false,
        //   items: [
        'getting-started/stylable-intelligence',
        //   ],
        // },
        {
            type: 'category',
            label: 'Integrations',
            collapsed: false,
            items: [
                'getting-started/nextjs-integration',
                'getting-started/react-integration',
                'getting-started/rollup-integration',
                'getting-started/storybook-integration',
                'getting-started/typescript-integration',
                'getting-started/webpack-integration',
            ],
        },
    ],
    Guides: [
        {
            type: 'category',
            label: 'Handbook',
            collapsed: false,
            items: [
                'guides/handbook/intro',
                'guides/handbook/class',
                'guides/handbook/namespacing',
                'guides/handbook/custom-state',
                'guides/handbook/runtime',
            ],
        },
        {
            type: 'category',
            label: 'Patterns',
            collapsed: true,
            items: [
                'guides/component-best-practices',
                'guides/project-commons',
                'guides/shared-classes',
                'guides/component-variants',
            ],
        },
        'guides/ssr',
        {
            type: 'category',
            label: 'Migrations',
            collapsed: true,
            items: ['guides/migration-v3', 'guides/migration-v5'],
        },
    ],
    'Specification Reference': [
        'references/cheatsheet',
        {
            type: 'category',
            label: 'CSS',
            // link: {
            //   type: "generated-index",
            // },
            collapsed: false,
            items: [
                'references/class-selectors',
                'references/tag-selectors',
                'references/pseudo-classes',
                'references/pseudo-elements',
                'references/css-vars',
                'references/keyframes',
                'references/layer',
                'references/using-external-assets',
            ],
        },
        {
            type: 'category',
            label: 'Stylable',
            // link: {
            //   type: "generated-index",
            // },
            collapsed: true,
            items: [
                'references/imports',
                'references/root',
                'references/extend-stylesheet',
                'references/global-selectors',
                'references/custom-selectors',
                'references/st-scope',
                'references/namespace',
            ],
        },
        {
            type: 'category',
            label: 'Templating',
            // link: {
            //   type: "generated-index",
            // },
            collapsed: true,
            items: ['references/st-variables', 'references/mixins', 'references/formatters'],
        },
        'references/runtime',
    ],
};
