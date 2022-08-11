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
            link: {
                type: 'generated-index',
                title: 'Integrations',
                description: 'Click on one of our available integrations below to learn more about how to use it.',
                slug: '/getting-started/integrations',
                keywords: ['integrations'],
            },
            items: [
                'getting-started/nextjs-integration',
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
                'guides/handbook/import-class',
                'guides/handbook/extend',
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
                'references/css-vars',
                'references/keyframes',
                'references/layer',
                'references/pseudo-classes',
                'references/pseudo-elements',
                'references/type-selectors',
                'references/using-external-assets',
            ],
        },
        {
            type: 'category',
            label: 'Stylable',
            // link: {
            //   type: "generated-index",
            // },
            collapsed: false,
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
