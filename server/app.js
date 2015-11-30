import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config';

const app = new express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3000, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('App started.')
  }
});
