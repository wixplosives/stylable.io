const { StylableWebpackPlugin, applyWebpackConfigStylableExcludes } = require('@stylable/webpack-plugin');
const path = require('node:path');

module.exports = function (_context, _options) {
    return {
        name: 'stylable-docusaurus-plugin',
        configureWebpack(config, isServer, utils) {
            applyWebpackConfigStylableExcludes(config);

            return {
                mergeStrategy: { plugins: 'prepend' },
                plugins: [
                    new StylableWebpackPlugin({
                        //ToDo: depthStrategy: 'css'

                        /* ToDo: make sure css+js work for dev */
                        cssInjection: 'css',

                        stcConfig: path.join(__dirname, '../stylable.config.cjs'),

                        optimize: {
                            /* Removes comments from output css */
                            removeComments: true,
                            /* Removes unused rules that target unused components */
                            removeUnusedComponents: true,
                            /* Remove empty css rules */
                            removeEmptyNodes: true,
                            /* Generate short classnames */
                            classNameOptimizations: false,
                            /* Generate short namespaces */
                            shortNamespaces: false,
                            /* Should minify css */
                            minify: true,
                        },
                    }),
                ],
            };
        },
    };
};
