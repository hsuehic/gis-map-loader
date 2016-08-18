/**
 * Created by Richard on 2016/8/18.
 * repo: https://github.com/hsuehic/gis-map-loader.git
 * author: Richard
 */
module.exports = function (content) {
    this.cacheable && this.cacheable();
    this.value = content;
    return 'module.exports = ' + JSON.stringify(content);
};