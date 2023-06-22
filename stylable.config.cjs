const { typedConfiguration } = require('@stylable/cli');

module.exports.stcConfig = typedConfiguration({
    options: {
        srcDir: 'src',
        outDir: 'st-types',
        dts: true,
        dtsSourceMap: true,
    },
});
