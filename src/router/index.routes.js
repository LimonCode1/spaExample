// archivo para realizar cambio de rutas segun cambie
import { pages } from '../controller/index';

// obteniendo elemento del index.html
let content = document.getElementById('root');
const router = async (route) => {
	// limpiando contenido para que cuando se visite de nuevo el hash no se repita el mismo contenido
	content.innerHTML = '';
	switch (route) {
		case '#/': {
			return content.appendChild(pages.home());
			// return console.log('en la casita!!');
		}
		case '#/products': {
			return content.appendChild(pages.product());
			// return console.log('en products!!');
		}
		case '#/about': {
			return content.appendChild(await pages.about());
			// return console.log('en el about!');
		}
		default: {
			return content.appendChild(await pages.notFound404());
			// return console.log('404!! bb');
		}
	}
};

export { router };
