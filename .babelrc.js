module.exports = {
  presets: [
    [
      // gatsby's custom presets that come with a bundle
      // of nice things
      'babel-preset-gatsby',
      {
        // override presets to only target browsers that
        // we care about.
        targets: {
          node: 'current',
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
    // support use of the css prop in jsx
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    [
      // Resolve modules start w/ ~ to be relative to proj
      'babel-plugin-module-resolver',
      {
        alias: {
          '~': '.',
        },
      },
    ],
  ],
};
