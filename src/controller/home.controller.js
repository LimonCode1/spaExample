// importando views html
import home from '../views/home.html';

export default () => {
	// debo de guardar views en un elemento creado con js
	const divElement = document.createElement('div');
	// agregando clases a nuestro elemento
	divElement.classList = 'text-warning';
	divElement.innerHTML = home;
	// obteniendo eventos de dicha vista para procesarlos
	const btnClick = divElement.querySelector('#clickMe');
	btnClick.addEventListener('click', () => {
		alert('clickeado prro!');
	});
	return divElement;
};
