module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
    '@babel/plugin-syntax-dynamic-import'
  ]
}
