const PostcssEasyImport = require('postcss-easy-import');
const Autoprefixer = require('autoprefixer');
const PostcssAdvancedVariables = require('postcss-advanced-variables');
const PostcssNested = require('postcss-nested');
const PostcssRgb = require('postcss-rgb');
const PostcssInlineSvg = require('postcss-inline-svg');
const CssNano = require('cssnano');
const PostcssPxToRem = require('postcss-pxtorem');
const fs = require('fs');

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: [
    PostcssEasyImport({
      extensions: '.pcss',
    }),
    Autoprefixer({
      cascade: false,
    }),
    PostcssAdvancedVariables({
      variables: JSON.parse(fs.readFileSync('./src/styles/variables.json', 'utf-8')),
    }),
    PostcssNested,
    PostcssRgb,
    PostcssInlineSvg({
      removeFill: false,
      path: './src/images/icons',
    }),
    CssNano,
    PostcssPxToRem({
      rootValue: 16,
      propList: ['*', '!*border*'],
      selectorBlackList: [/^html$/],
    }),
  ],
};

// const fs = require('fs');
//
// module.exports = {
//   syntax: 'postcss-scss',
//   parser: 'postcss-scss',
//   plugins: [
//     require('postcss-easy-import')({
//       extensions: '.pcss',
//     }),
//     require('autoprefixer')({
//       cascade: false,
//     }),
//     require('postcss-advanced-variables')({
//       variables: JSON.parse(fs.readFileSync('./src/styles/variables.json', 'utf-8')),
//     }),
//     require('postcss-nested'),
//     require('postcss-rgb'),
//     require('postcss-inline-svg')({
//       removeFill: false,
//       path: './src/images/icons',
//     }),
//     require('cssnano'),
//     require('postcss-pxtorem')({
//       rootValue: 16,
//       propList: ['*', '!*border*'],
//       selectorBlackList: [/^html$/],
//     }),
//   ],
// };
