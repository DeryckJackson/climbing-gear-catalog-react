module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react'],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    // TODO:#3 Remove after converting GearList component to functional
    ['@babel/plugin-proposal-class-properties']
  ]
};
