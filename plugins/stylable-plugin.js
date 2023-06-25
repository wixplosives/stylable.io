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
                    }),
                ],
            };
        },
    };
};
