module.exports = {
    title: 'Stylable',
    tagline: 'is CSS for components',
    url: 'https://stylable.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'wixplosives', // Usually your GitHub org/user name.
    projectName: 'stylable.io', // Usually your repo name.
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
        navbar: {
            hideOnScroll: true,
            title: 'Stylable',
            logo: {
                alt: 'Stylable Logo',
                src: 'img/branding/logo/SVG/96-logo-OnlySymbol.svg',
            },
            items: [
                {
                    to: 'docs/getting-started/intro',
                    activeBasePath: 'docs/getting-started',
                    label: 'Getting Started',
                    position: 'left',
                },
                {
                    to: 'docs/guides/handbook/intro',
                    activeBasePath: 'docs/guides',
                    label: 'Guides',
                    position: 'left',
                },
                {
                    to: 'docs/references/cheatsheet',
                    activeBasePath: 'docs/references',
                    label: 'API',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/wix/stylable',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/getting-started/intro',
                        },
                        {
                            label: 'Guides',
                            to: 'docs/guides/components-basics',
                        },
                        {
                            label: 'API',
                            to: 'docs/references/cheatsheet',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Issues',
                            href: 'https://github.com/wix/stylable/issues',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/stylableio',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Site GitHub',
                            href: 'https://github.com/wixplosives/stylable.io',
                        },
                        {
                            label: 'Style Guide',
                            to: 'docs/style-guide',
                        },
                        {
                            label: 'Attributions',
                            to: 'docs/attributions',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Wix.com. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./src/sidebars'),
                    editUrl: 'https://github.com/wixplosives/stylable.io/edit/master',
                    exclude: ['unpublished/**'],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/wixplosives/stylable.io/edit/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
            },
        ],
    ],
};
