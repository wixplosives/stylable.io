module.exports = {
  title: 'Stylable',
  tagline: 'is CSS for components',
  url: 'https://wixplosives.github.io',
  baseUrl: '/stylable.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wixplosives', // Usually your GitHub org/user name.
  projectName: 'stylable.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Stylable',
      logo: {
        alt: 'Stylable Logo',
        src: 'img/branding/logo/SVG/96-logo-OnlySymbol.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/wix/stylable',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
        // {
        //   href: 'https://github.com/wix/stylable',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/style-guide',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2/',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/stylable.io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'Site GitHub',
              href: 'https://github.com/wixplosives/stylable.io',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/wixplosives/stylable.io/edit/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wixplosives/stylable.io/edit/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
