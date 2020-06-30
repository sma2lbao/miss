const path = require("path");

module.exports = {
  webpack: function(config) {
    // config.module.rules.push({
    //   test: /\.(graphql|gql)$/,
    //   exclude: /node_modules/,
    //   loader: "graphql-tag/loader",
    // });
    config.resolve = {
      ...config.resolve,
      alias: { "@": path.resolve(__dirname, "src") },
    };
    return config;
  },
};
