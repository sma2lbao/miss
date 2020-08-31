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
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      // Change the https certificate options to match your certificate, using the .env file to
      // set the file paths & passphrase.
      // const fs = require("fs");
      // config.https = {
      //   key: fs.readFileSync(process.env.REACT_HTTPS_KEY, "utf8"),
      //   cert: fs.readFileSync(process.env.REACT_HTTPS_CERT, "utf8"),
      //   ca: fs.readFileSync(process.env.REACT_HTTPS_CA, "utf8"),
      //   passphrase: process.env.REACT_HTTPS_PASS,
      // };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  paths: function(paths, env) {
    // ...add your paths config
    return paths;
  },
};
