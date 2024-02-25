module.exports = function override(config, env) {
    // Exclude the face-api.js library from source-map-loader
    config.module.rules.push({
      test: /\.js$/,
      use: ["source-map-loader"],
      enforce: "pre",
      exclude: /face-api\.js/,
    });
  
    return config;
  };