import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config, { output } from './webpack.config.js';

const app = express();
const compiler = webpack(config);

// Tell Express to use config and compiler as base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: output.publicPath
}));

app.post('/submit-form', (req, res) => {
    console.log('Received contact form submission!');
});

// Serve the files on port 3000.
app.listen(3000, () => console.log(`App listening on port 3000!`));
