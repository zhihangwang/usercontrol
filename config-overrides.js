const path = require('path');

const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
} = require("customize-cra");

module.exports = override(
    addWebpackAlias({
        "@common": path.resolve(__dirname, "./src/common"),
    }),
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
    })
);