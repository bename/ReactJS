var webpack = require('webpack');
var path = require('path');

module.exports = {
    //mode: "production",
    mode: "development",
    devtool: 'inline-source-map', // Line numbers in case of erros for debuging
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080', // setup dev server and hot reloading
        'webpack/hot/only-dev-server', // setup dev server and hot reloading
        './src' // The folder where webpack will look for the file to start the app, in case there is no file it will look for index.js file
    ],
    output: { // The place webpack will output the file -- mostly in prod
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: { // The place where webpack will look to bundle the files and extensions
        mainFiles: ['index'],
        modules: ['node_modules'],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test:/\.css?$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Hot/Live reloading,
        new webpack.NoEmitOnErrorsPlugin() // Webpack wont compile if there any errors
    ]
};