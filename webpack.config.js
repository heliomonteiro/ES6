module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], //Arquivo principal onde escreve codigo ES6...
    output: { // Para qual arquivo deve enviar código convertido para compatibilidade antes ES6
        path: __dirname + '/public', //diretorio raiz
        filename: 'bundle.js', //arquivo bundle como já estava
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [ //Diz como o webpack deve comportar ao importar novos arquivos js
            { // baseado na extensão do arquivo, qual loader vai utilizar
                test: /\.js$/, // Arquivos terminados com js
                exclude: /node_modules/, //Pro babel não executar arquivos desta pasta
                use: {
                    loader: 'babel-loader', // com este loader não será necessário mais o babel em background
                }
            }
        ]
    }
};