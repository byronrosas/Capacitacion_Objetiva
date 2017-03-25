module.exports = {
    entry: './public/app.js',  //archivo de entrada, del que se va a migrar todas las funcionalidades
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js' 
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
}