// Webpack configuration

module.exports = {
    entry: './src/main.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {

        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,   // does this search entire rootDir?
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3000
    }
};
