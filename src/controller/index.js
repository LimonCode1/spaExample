// en este archivo llamaremos a cada uno de los controladores de las vistas
// esto para mejorar el orden del proyecto

import home from './home.controller';
import about from './about.controller';
// import product from './product.controller';
import notFound404 from './404.controller';

const pages = {
	home: home,
	about: about,
	// product: product,
	notFound404: notFound404,
};

export { pages };
