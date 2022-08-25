const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, './src/js/main.js'),
        path.resolve(__dirname, './src/scss/styles.scss') 
    ],
    output: {
        filename: './assets/js/main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./assets/images/[name][ext]",
                }
            }, {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./assets/fonts/[name][ext]",
                }
            }
            , {
                test: /\.html$/i,
                loader: "html-loader",
                generator: {
                    filename: "[name][ext]",
                },
            }, {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => {
                                    require('autoprefixer')
                                }
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                    }
                ],
                generator: {
                    publicPath: './assets/css/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/app.css',
        })
    ]
}