const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'Mixology';
            args[0].minify = false;
            return args;
        });
    },
    publicPath: '/mixology/',
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    },
    pluginOptions: {
        browserSync: {
            files: ['src/*'],
        },
    },
    pwa: {
        name: "Mixology",
        themeColor: "#ffd100"
    }
});
