module.exports = {
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
};
