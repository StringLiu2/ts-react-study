const { override, fixBabelImports,addLessLoader } = require("customize-cra");

module.exports = override(
    // addDecoratorsLegacy(),//使用装饰器 //需要引入@babel/plugin-proposal-decorators依赖，next ts可以使用 react ts版本无法使用
    fixBabelImports("import", { libraryName: 'antd', style: true }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'red' }//配置主题色
    })
);