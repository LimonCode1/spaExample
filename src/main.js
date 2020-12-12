console.log('hello');
// una single page application es una simple
// aplicacion de html, css, js que contiene
// toda la logica en un solo archivo de html,
// el contenido se genera de forma dinamica
// con javascript

//importando boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importando hoja de estilos con sass
import './index.sass';

//capturando enventos cada vez que se cambian las url

// importando archivo de rutas
import { router } from './router/index.routes';
// el evento hashchange detecta cuando, estoy cambiando la url del sitio
window.addEventListener('hashchange', () => {
	router(window.location.hash);
});
