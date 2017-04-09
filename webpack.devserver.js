'use strict';
/* eslint-disable no-console */
let path = require('path');
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.config.dev.js');

let app = express();
let compiler = webpack(config);
let port = 2014;
let host = '0.0.0.0';
let page = '';

let hostAddress = `http://${host}:${port}/${page}`;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    stats: { colors: true },
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
    reload: true
}));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, host, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at ' + hostAddress);
});

/* eslint-enable */
