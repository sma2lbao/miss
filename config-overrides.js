const path = require('path');

module.exports = {
    webpack: function(config) {
        config.resolve = {
            ...config.resolve,
            alias: { '@': path.resolve(__dirname, 'src') },
          };
        return config
    }
}