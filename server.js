/// <reference path="typings/index.d.ts"/>

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3333, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3333');
});

/*var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    //hot: true,
    inline: true,
    // display no info to console (only warnings and errors)
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        // With console colors
        colors: true,
        // add the hash of the compilation
        hash: true,
        // add webpack version information
        version: false,
        // add timing information
        timings: true,
        // add assets information
        assets: false,
        // add chunk information
        chunks: false,
        // add built modules information to chunk information
        chunkModules: false,
        // add built modules information
        modules: false,
        // add also information about cached (not built) modules
        cached: false,
        // add information about the reasons why modules are included
        reasons: false,
        // add the source code of modules
        source: false,
        // add details to errors (like resolving log)
        errorDetails: true,
        // add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Add messages from child loaders
        children: false
    }
});

server.listen(3333, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:3333. Please wait, I'm building things for you...");
});*/

