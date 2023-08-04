module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['module:react-native-dotenv'],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
  ]
};
