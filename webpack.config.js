// para optimizar la construccion se utiliza webpack
// para automatizar la compilacion de codigo , ejemplo sass,
// minificar archivos entre otros.

// webpack recibe un archivo de entrada y uno de salida
// el de salida sera el que ya ha procesado y compilado.

// este plugin me permite copiar el codigo html de src a dist
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
	// ./ es el acceso por la raiz de la carpeta a un archivo
	// entry: './main.js',
	entry: './src/main.js',
	// en donde se colocara la conversion del archivo
	output: {
		// __dirname, me obtiene la ruta de mi carpeta
		// dentro del directorio donde se encuentre
		path: __dirname + '/dist',
		// la carpeta dist sera la carpeta de produccion
		// y la de src sera la carpeta de desarrollo
		filename: 'bundle.js',
		// el archivo webpack, se debe ejecutar en la terminal
		// del proyecto como 'npx webpack'
		// el modulo webpack cli, nos ayuda a ejecutar
		// webpack desde la consola
	},
	module: {
		// rules es un arreglo, el cual contiene objetos para configurar
		// los loader que queremos que webpack interprete o reconozca.
		rules: [
			// aca se colocan cada uno de los loader que queremos
			// que webpack entienda, y de esta manera le vamos a decir
			// que queremos que tambien nos ayude a compilar y colocar
			// en la carpeta dist
			{
				test: /\.css$/i,
				// con ayuda del modulo style loader, webpack puede leer
				// los archivos cc y los incorpora al bundle.js
				use: ['style-loader', 'css-loader'],
			},
			{
				// para que tambien se entienda sass o scss, lo declaramos
				// aca en otra regla de ejecucion
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			// cargando loader para que pueda entender html webpack
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			// le estoy diciendo que tome por plantilla el index de src
			template: './src/index.html',
		}),
	],
};
