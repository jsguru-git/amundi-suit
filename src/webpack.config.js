const Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('web/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
    .enableVueLoader()
    .addEntry('js/theme', './app/Resources/assets/js/theme.js')
    .addEntry('vue/app', './app/Resources/assets/vue/main.js')
    .addStyleEntry('css/theme', './app/Resources/assets/scss/base.scss')
    .enableSassLoader()
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();