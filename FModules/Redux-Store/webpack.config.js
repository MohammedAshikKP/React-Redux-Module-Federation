const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 4004
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ReduxStore",
      filename: "remoteEntry.js",
      library: {type: "var",name:'ReduxStore'},
      exposes: {
        './Store':'./store.js',

      },
      remotes:{
          Container : 'Container@https://localhost:4001'
      },
      shared: {
        react: {
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          version: '^17.0.2',
        },
        'react-redux': {
          import: 'react-redux', // the "react" package will be used a provided and fallback module
          shareKey: 'react-redux', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          version: '^7.2.5',
        },
      },
    }),
   
  ]
};
