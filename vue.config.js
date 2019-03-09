module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  assetsDir: 'static',
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
};
