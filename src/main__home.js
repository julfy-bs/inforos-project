import './styles/main.pcss';
if (process.env.NODE_ENV === 'development') {
  require('file-loader!./pug/pages/home.pug');
}
