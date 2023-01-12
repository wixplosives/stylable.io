const { StylableWebpackPlugin, applyWebpackConfigStylableExcludes } = require('@stylable/webpack-plugin');

module.exports = function (context, options) {
    return {
        name: 'stylable-docusaurus-plugin',
        configureWebpack(config, isServer, utils) {

            applyWebpackConfigStylableExcludes(config);

            return {
                mergeStrategy: { plugins: 'prepend' },
                plugins: [new StylableWebpackPlugin({})],
            };
        },
    };
};
