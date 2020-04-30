const path = require("path");

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.s?css$/,
    include: path.resolve(__dirname, "../")
  });

  const fileLoader = config.module.rules.find(
    loader => loader.query && loader.query.name
  );
  // removes svg from the list
  fileLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
  fileLoader.query = {}; // avoid file renaming

  config.module.rules.push({
    test: /\.svg$/,
    loader: "vue-svg-loader"
  });

  Object.assign(config.resolve.alias, {
    "@": path.resolve(__dirname, '../src')
  });

  return config;
};
