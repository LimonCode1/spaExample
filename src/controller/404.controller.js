import notFound404 from '../views/404.html';

export default async () => {
	const divElement = document.createElement('div');
	divElement.innerHTML = notFound404;
	return divElement;
};
