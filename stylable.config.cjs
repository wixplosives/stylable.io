const { typedConfiguration } = require('@stylable/cli');
const { createNamespaceStrategy } = require('@stylable/core');

module.exports.stcConfig = typedConfiguration({
    options: {
        srcDir: 'src',
        outDir: 'st-types',
        dts: true,
        dtsSourceMap: true,
    },
});
module.exports.defaultConfig = (fs) => {
    return {
        // set a custom namespace resolver
        resolveNamespace: createNamespaceStrategy({
            strict: true,
            hashFragment: 'minimal',
        }),
    };
};
